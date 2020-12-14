import { IRepository } from "./IRepository";

export interface IProductRepository extends IRepository{
    getProducts(where:{}):any[];
    getProductById(id:number):any;
}