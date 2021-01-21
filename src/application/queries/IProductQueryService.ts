import { IQueryService } from "@application/IQueryService";
import { ProductLookup } from "@application/queries/data/ProductLookup";
import { CategoryLookup } from "./data/CategoryLookup";

export interface IProductQueryService extends IQueryService{
    ListCategoryLookupData(): CategoryLookup[] | Promise<CategoryLookup[]>
    GetCategoryLookupData(categoryId:string): CategoryLookup | Promise<CategoryLookup>
    ListProductLookupData(): ProductLookup[] | Promise<ProductLookup[]>
    GetProductLookupData(productId:string): ProductLookup | Promise<ProductLookup>
    //return id,name of product retornar com orm ou repo
}