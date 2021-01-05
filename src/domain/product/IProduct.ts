import { IEntity } from "@domain/common/IEntity";

export interface IProduct extends IEntity{
  sku: string;
  name: string;
  description: string;
  price: number;
}