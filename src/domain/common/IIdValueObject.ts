import { IValueObject } from "@domain/common/IValueObject";

export interface IIdValueObject extends IValueObject{
  id: string
  getId(): string;
}