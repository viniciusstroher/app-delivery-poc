import { IDomainEvent } from "../domain/interfaces/IDomainEvent";
import { IEntity } from "../domain/interfaces/IEntity";

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
        this.domainEvents.push(evt);
    }

    removeEvent(index: number): IDomainEvent{
        const removedEvent = this.domainEvents.splice(index, 1);
        if(removedEvent.length == 0)
            throw new Error('Event index not found.');
        return removedEvent[0];
    }
}