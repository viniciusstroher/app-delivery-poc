import { IDomainEvent } from "../interfaces/IDomainEvent";
import { IEntity } from "../interfaces/entities/IEntity";
import { Entity } from "./Entity";
import { Product } from "./Product";

export class Category extends Entity{
    name: string;
    products:Product[];

    constructor(){
        super();
        
        if(!name){
            throw new EmptyCategoryNameError;
        }
        
        this.name = "";
        this.products = [];
    }

    setName(name:string){
        if(!name){
            throw new EmptyCategoryNameError;
        }

        this.name = name;
    }

    addProduct(product:Product){
        if(!product){
            throw new EmptyProductError;
        }

        this.products.push(product)
    }
}

export class EmptyCategoryNameError extends Error{}
export class EmptyProductError extends Error{}
