import { IDomainEvent } from "../IDomainEvent";
import { IIdValueObject } from "../value-objects/IIdValueObject";

export interface IEntity{
  id:IIdValueObject;
  domainEvents: IDomainEvent[];

  equals(compareEntity: IEntity):boolean;
  isTranscient(): boolean; //ja foi persistido?
  addEvent(evt: IDomainEvent):void;
  removeEvent(index: number):IDomainEvent;
}