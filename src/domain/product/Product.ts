import { ProductId } from "@domain/product/ProductId"
import { IProduct } from "@domain/product/IProduct"
import { Entity } from "@domain/common/Entity"
import { CategoryId } from "@domain/product/CategoryId"
import { IAgreggateRoot } from "@domain/common/IAgreggateRoot"

export class Product extends Entity implements IProduct, IAgreggateRoot{
    id: ProductId
    sku: string;
    name: string;
    description: string;
    price: number;
    categoryId: CategoryId;

    constructor(id: ProductId, sku: string, name: string, description: string, price: number, categoryId: CategoryId){
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

        if(!categoryId){
            throw new EmptyProductCategory
        }

        this.id = id
        this.sku = sku
        this.name = name
        this.description = description
        this.price = price
        this.categoryId = categoryId
    }

}

export class PriceMinorThanOneError extends Error{}
export class EmptySkuError extends Error{}
export class EmptyProductNameError extends Error{}
export class EmptyProductDescriptionError extends Error{}
export class EmptyProductIdError extends Error{}
export class EmptyProductCategory extends Error{}