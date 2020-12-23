import { IIdValueObject } from "@domain/interfaces/value-objects/IIdValueObject";
import { ValueObject } from "@domain/value-objects/ValueObject";

export class IdValueObject extends ValueObject implements IIdValueObject{
    id:string
    
    constructor(id:string){
        super();
       
        if(!id){
            throw new EmptyValueObjectIdError
        }
        
        this.id = id;
    }   

    getId():string{
        return this.id;
    }
}

export class EmptyValueObjectIdError extends Error {}
