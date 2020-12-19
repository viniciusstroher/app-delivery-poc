import { IDomainEvent } from "../interfaces/IDomainEvent";
import { IEntity } from "../interfaces/entities/IEntity";

export class Entity implements Entity{
    id:number = 0;
    domainEvents: IDomainEvent[] = [];

    constructor(){
        this.domainEvents = [];
    }

    equals(compareEntity: IEntity): boolean{
        if(compareEntity.id === this.id){
            return true;
        }
        return false;
    }

    isTranscient(): boolean{
        return this.id != 0;
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
