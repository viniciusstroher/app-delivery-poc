import { IProduct } from "../interfaces/entities/IProduct";
import { Entity } from "./Entity";

// export default Product implements
export class Product extends Entity implements IProduct{
    sku: string;
    name: string;
    description: string;
    price: number;

    constructor(sku:string, name:string, description:string, price:number){
        super();
        
        if(!sku){
            throw new EmptySkyError
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
export class EmptySkyError extends Error{}
export class EmptyProductNameError extends Error{}
export class EmptyProductDescriptionError extends Error{}
