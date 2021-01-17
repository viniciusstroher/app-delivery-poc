import { IProductRepository } from "@domain/product/IProductRepository"
import { IRequest, IResponse, IUseCase } from "@application/IUseCase"
import { Product } from "@domain/product/Product"
import { Category } from "@domain/product/Category"
import { ICategoryRepository } from "@domain/product/ICategoryRepository"

export interface GetProductUseCaseParam extends IRequest {
    productId:string
}
export interface GetProducUseCaseResponse extends IResponse {
    id:string,
    name:string
    price:number,
    category:{
        id:string,
        name:string
    }
}

export class GetProductUseCase implements IUseCase{
    productRepository:IProductRepository
    categoryRepository:ICategoryRepository

    constructor(productRepository:IProductRepository, categoryRepository:ICategoryRepository){
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    //criar type de params para este caso
    async execute (request: GetProductUseCaseParam) : Promise<GetProducUseCaseResponse> {
        const product:Product = await this.productRepository.getProductById(request.productId);

        if(!product){
            throw new ProductNotExistsError
        }
        
        const category:Category = await this.categoryRepository.getCategoryById(product.categoryId.id);
        if(!category){
            throw new CategoryNotExistsError
        }

        const productWithCategoryResponse:GetProducUseCaseResponse = 
        {
            id:product.id.getId(),
            name:product.name,
            price:product.price,
            category:{
                id:category!.id!.getId(),
                name:category.name
            }
        }
        
        return productWithCategoryResponse
    }
}

export class ProductNotExistsError extends Error {}
export class CategoryNotExistsError extends Error {}

