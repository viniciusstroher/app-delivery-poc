import { IRepository } from "@domain/common/IRepository";
import { Category } from "@domain/product/Category";

export interface ICategoryRepository extends IRepository{
    getCategories(where: {}): Promise<Category[]> | Category[];
    getCategoryById(id: string): Promise<Category> | Category;
}