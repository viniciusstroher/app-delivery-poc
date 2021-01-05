import { IRepository } from "@domain/common/IRepository";

export interface IOrderRepository extends IRepository{
    getOrders(where:{}): Promise<any[]> | any[];
    getOrderById(id:string): Promise<any[]> | any[];
}