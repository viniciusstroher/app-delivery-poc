import { IRepository } from "./IRepository";

export interface IOrderRepository extends IRepository{
    getOrders(where:{}):any[];
    getOrderById(id:string):any;
}