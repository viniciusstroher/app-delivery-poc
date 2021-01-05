import { Entity } from "@domain/common/Entity"
import { CategoryId } from "@domain/product/CategoryId"

export class Category extends Entity{
    name: string;
    description: string;

    constructor(id: CategoryId, name: string, description: string){
        super();
        
        if(!id){
            throw new EmptyCategoryIdError
        }

        if(!name){
            throw new EmptyCategoryNameError;
        }
        
        if(!description){
            throw new EmptyCategoryDescriptionError;
        }

        this.name = name;
        this.description = description;
    }

}

export class EmptyCategoryNameError extends Error{}
export class EmptyCategoryDescriptionError extends Error{}
export class EmptyCategoryIdError extends Error{}