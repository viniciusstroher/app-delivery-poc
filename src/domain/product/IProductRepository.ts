import { IRepository } from "@domain/common/IRepository";
import { Product } from "@domain/product/Product";

export interface IProductRepository extends IRepository{
    getProducts(where: {}): Promise<Product[]> | Product[];
    getProductById(id: string): Promise<Product> | Product;
}