import { IRepository } from "./IRepository";

export interface IProductRepository extends IRepository{
    getProducts(where:{}):Promise<any[]>;
    getProductById(id:string):Promise<any>;
}