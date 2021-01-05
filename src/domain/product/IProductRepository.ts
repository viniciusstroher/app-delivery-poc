import { IRepository } from "@domain/common/IRepository";

export interface IProductRepository extends IRepository{
    getProducts(where: {}): Promise<any[]> | any[];
    getProductById(id: string): Promise<any[]> | any[];
}