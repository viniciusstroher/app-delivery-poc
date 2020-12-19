import { IDomainEvent } from "../IDomainEvent";

export interface IEntity{
  id:number;
  domainEvents: IDomainEvent[];

  equals(compareEntity: IEntity):boolean;
  isTranscient(): boolean; //ja foi persistido?
  addEvent(evt: IDomainEvent):void;
  removeEvent(index: number):IDomainEvent;
}