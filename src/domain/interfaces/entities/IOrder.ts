import {IProduct} from "@domain/interfaces/entities/IProduct"
import {IOrderStatus} from "@domain/interfaces/value-objects/IOrderStatus"
import { IEntity } from "./IEntity"

export interface IOrder extends IEntity{
  products:IProduct[];
  status:IOrderStatus;
  
  addProduct(product:IProduct):void;
  removeProduct(product:IProduct):void;
  
  pending(product:IProduct):void;
  isPending():boolean;

  finish():void;
  isFinished():boolean;

  cancel():void;
  isCanceled():boolean;
}