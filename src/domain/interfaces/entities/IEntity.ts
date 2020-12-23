import { IDomainEvent } from "../IDomainEvent";
import { IIdValueObject } from "../value-objects/IIdValueObject";

export interface IEntity{
  id:IIdValueObject | null;
  domainEvents: IDomainEvent[];

  equals(compareEntity: IEntity):boolean;
  addEvent(evt: IDomainEvent):void;
  removeEvent(index: number):IDomainEvent;
}