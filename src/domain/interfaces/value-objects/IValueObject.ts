
export interface IValueObject{
  getId():string;
  equals(compareEntity: IValueObject):boolean;
}