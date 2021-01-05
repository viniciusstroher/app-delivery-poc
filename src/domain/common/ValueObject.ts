import { IDomainEvent } from "@domain/common/IDomainEvent";
import { IValueObject } from "@domain/common/IValueObject";

export class ValueObject implements IValueObject{
    domainEvents: IDomainEvent[] = [];

    constructor(){
        this.domainEvents = [];
    }

    equals(compareValueObject: IValueObject): boolean{
        if(JSON.stringify(compareValueObject) === JSON.stringify(this)){
            return true;
        }
        return false;
    }

    addEvent(evt: IDomainEvent):void{
        if(!evt){
            throw new EmptyDomainEventError;
        }
        this.domainEvents.push(evt);
    }

    removeEvent(index: number): IDomainEvent{
        const removedEvent = this.domainEvents.splice(index, 1);
        if(removedEvent.length == 0)
            throw new DomainEventNotFoundError;
        return removedEvent[0];
    }

}

export class GetIdParentError extends Error {}
export class DomainEventNotFoundError extends Error {}
export class EmptyDomainEventError extends Error {}
