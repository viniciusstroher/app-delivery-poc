
export interface IValueObject{
  equals(compareEntity: IValueObject):boolean;
}

export interface IIdValueObject extends IValueObject{
  id:string
  getId():string;
}