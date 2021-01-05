import { IDomainEvent } from "@domain/common/IDomainEvent";
import { IIdValueObject } from "@domain/common/IIdValueObject";

export interface IEntity{
  id: IIdValueObject | null;
  domainEvents: IDomainEvent[];

  equals(compareEntity: IEntity): boolean;
  addEvent(event: IDomainEvent): void;
  removeEvent(eventIndex: number): IDomainEvent;
}