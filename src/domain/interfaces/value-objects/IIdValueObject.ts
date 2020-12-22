import { IValueObject } from "@domain/interfaces/value-objects/IValueObject";

export interface IIdValueObject extends IValueObject{
  id:string
  getId():string;
}