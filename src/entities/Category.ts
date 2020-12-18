import { IDomainEvent } from "../domain/interfaces/IDomainEvent";
import { IEntity } from "../domain/interfaces/IEntity";
import { Entity } from "./Entity";
import { Product } from "./Product";

export class Category extends Entity{
    name: string;
    products:Product[];

    constructor(){
        super();
        this.name = "";
        this.products = [];
    }

    setName(newCategoryName:string){
        if(!newCategoryName){
            throw new EmptyCategoryName;
        }

        this.name = newCategoryName;
    }

    addProduct(productToAttach:Product){
        if(!productToAttach){
            throw new EmptyProduct;
        }
        
        this.products.push(productToAttach)
    }
}

export class EmptyCategoryName extends Error{}
export class EmptyProduct extends Error{}
