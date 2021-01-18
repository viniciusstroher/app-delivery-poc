import { IRepository } from "@domain/common/IRepository"
import { Order } from "@domain/order/Order"
export interface IOrderRepository extends IRepository{
    getOrders(where:{}): Promise<Order[]> | Order[];
    getOrderById(id:string): Promise<any[]> | Order[];
}