import { IDomainEvent } from "../interfaces/IDomainEvent";
import { IEntity } from "../interfaces/entities/IEntity";
import { IIdValueObject } from "@domain/interfaces/value-objects/IIdValueObject";

export class Entity implements Entity{
    id:IIdValueObject | null;
    domainEvents: IDomainEvent[] = [];

    constructor(){
        this.domainEvents = [];
        this.id = null;
    }

    equals(compareEntity: IEntity): boolean{
        if(compareEntity.id === this.id){
            return true;
        }
        return false;
    }

    isTranscient(): boolean{
        return this.id != null;
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
