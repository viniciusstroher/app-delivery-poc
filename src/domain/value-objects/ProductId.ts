import { IdValueObject } from "@domain/value-objects/IdValueObject";

// export default Product implements
export class ProductId extends IdValueObject{

    private constructor(id:string){
        super(id);
    }

    getId(){
        return this.id;
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