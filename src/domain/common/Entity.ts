import { IDomainEvent } from "@domain/common/IDomainEvent";
import { IEntity } from "@domain/common/IEntity";
import { IIdValueObject } from "@domain/common/IIdValueObject";

export class Entity implements IEntity{
    id: IIdValueObject | null;
    domainEvents: IDomainEvent[] = [];

    constructor(){
        this.domainEvents = [];
        this.id = null;
    }

    equals(compareEntity: IEntity): boolean{
        if(compareEntity?.id?.getId() === this.id?.getId()){
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

export class DomainEventNotFoundError extends Error {}
export class EmptyDomainEventError extends Error {}
