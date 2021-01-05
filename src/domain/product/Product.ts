import { ProductId } from "@domain/product/ProductId";
import { IProduct } from "@domain/product/IProduct";
import { Entity } from "@domain/common/Entity";

export class Product extends Entity implements IProduct{
    id: ProductId
    sku: string;
    name: string;
    description: string;
    price: number;

    constructor(id: ProductId, sku: string, name: string, description: string, price: number){
        super();
        
        if(!id){
            throw new EmptyProductIdError
        }

        if(!sku){
            throw new EmptySkuError
        }
        
        if(!name){
            throw new EmptyProductNameError
        }

        if(!description){
            throw new EmptyProductDescriptionError
        }
        
        if(price < 1.0){
            throw new PriceMinorThanOneError
        }

        this.id = id;
        this.sku = sku;
        this.name = name;
        this.description = description;
        this.price = price
    }

    updatePrice(price:number){
        if(price < 1.0){
            throw new PriceMinorThanOneError
        }
        this.price = price;
    }
    
}

export class PriceMinorThanOneError extends Error{}
export class EmptySkuError extends Error{}
export class EmptyProductNameError extends Error{}
export class EmptyProductDescriptionError extends Error{}
export class EmptyProductIdError extends Error{}
