import { CategoryLookup } from "@application/queries/data/CategoryLookup";
import { ProductLookup } from "@application/queries/data/ProductLookup";
import { IProductQueryService } from "@application/queries/IProductQueryService";
import { Category } from "@domain/product/Category";
import { ICategoryRepository } from "@domain/product/ICategoryRepository";
import { IProductRepository } from "@domain/product/IProductRepository";
import { Product } from "@domain/product/Product";

export class ProductQueryServiceInMemory implements IProductQueryService{
    //da pra implementar usando orm, nesse caso vai ser pelo repo em memoria
    productRepository: IProductRepository
    categoryRepository:ICategoryRepository

    constructor(productRepository:IProductRepository, categoryRepository:ICategoryRepository){
        this.productRepository = productRepository
        this.categoryRepository = categoryRepository
    }

    async ListCategoryLookupData(): Promise<CategoryLookup[]>{
        //fazer query com o repo
        const products = await this.productRepository.getProducts({})
        return products.reduce((productAccumulator:any, product:Product) => {
            return [...productAccumulator, new CategoryLookup(product.id.getId(), product.name)]
        },[])
    }

    async GetCategoryLookupData(categoryId:string): Promise<CategoryLookup>{
        //fazer query com o repo
        const category = await this.categoryRepository.getCategoryById(categoryId)
        return new CategoryLookup(category.id!.getId(), category.name)
    }

    async ListProductLookupData(): Promise<ProductLookup[]>{
        //fazer query com o repo
        const categories = await this.categoryRepository.getCategories({})
        return categories.reduce((categoryAccumulator:any, category:Category) => {
            return [...categoryAccumulator, new CategoryLookup(category!.id!.getId(), category.name)]
        },[])
    }

    async GetProductLookupData(productId:string): Promise<ProductLookup>{
         //fazer query com o repo
         const product = await this.productRepository.getProductById(productId)
         return new CategoryLookup(product.id!.getId(), product.name)
    }
}