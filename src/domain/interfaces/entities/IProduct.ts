import { IEntity } from "./IEntity";

export interface IProduct extends IEntity{
  sku: string;
  name: string;
  description: string;
  price: number;
}