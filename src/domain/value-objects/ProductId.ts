import { IdValueObject } from "@domain/value-objects/IdValueObject";

// export default Product implements
//IdValueObject<T>
/*
  static create(uuid:string){
        //usar uuid
        if(!uuid){
            throw new EmptyUuid;
        }
        
        return new T(uuid)
    }  
*/
export class ProductId extends IdValueObject{

    private constructor(id:string){
        super(id);
    }

    static create(uuid:string){
        //usar uuid
        if(!uuid){
            throw new EmptyUuid;
        }
        
        return new ProductId(uuid)
    }
}

export class EmptyUuid extends Error{}