import { IdValueObject } from "@domain/common/IdValueObject";
export class OrderId extends IdValueObject{

    private constructor(id: string){
        super(id);
    }

    static create(uuid: string){
        if(!uuid){
            throw new EmptyUuid;
        }
        
        return new OrderId(uuid)
    }
}

export class EmptyUuid extends Error{}