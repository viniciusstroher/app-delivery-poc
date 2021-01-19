import { IEntity } from "@domain/common/IEntity";
import { ProductId } from "@domain/product/ProductId";

export enum OrderStatus {
  Cancelled = 0,
  Pending = 1,
  AcceptedPayment,
  Shipping,
  Complete
}

export interface IOrderItem extends IEntity{
  order: number
  productId: ProductId
  quantity: number
  price: number
  changeOrder(order:number):void
}

export interface IOrder extends IEntity{
  type: OrderStatus
  createOrderDate: Date
  orderItems: IOrderItem[]
  total:number 
  
  addItem(item:IOrderItem):void
  removeItem(item:IOrderItem):void
  calculateTotal():number

  setOrderItemOrder(item:IOrderItem, order:number):void

  changeStatusToAcceptedPayment(): void
  changeStatusToShipping(): void
  changeStatusToComplete(): void
  changeStatusToCancealled():void

}