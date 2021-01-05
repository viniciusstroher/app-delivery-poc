import { IRepository } from "@domain/common/IRepository";

export interface ICategoryRepository extends IRepository{
    getCategories(where: {}): Promise<any[]> | any[];
    getCategoryById(id: string): Promise<any[]> | any[];
}