import {  ValueObject } from "./ValueObject";

// export default Product implements
export class ProductId extends ValueObject{
    id: string = "";

    private constructor(id:string){
        super();
        this.id = id;
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