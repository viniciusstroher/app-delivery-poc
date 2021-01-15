import { IProductRepository } from "@domain/product/IProductRepository"
import { IRequest, IResponse, IUseCase } from "@application/IUseCase"
import { ProductMapper} from "@infra/mapper/ProductMapper"
import { Product } from "@domain/product/Product"
import { CategoryId } from "@domain/product/CategoryId"
import { uuidGenerated } from "@application/uuidGeneratedFactory"
import { ProductId } from "@domain/product/ProductId"
import { Category } from "@domain/product/Category"
import { ICategoryRepository } from "@domain/product/ICategoryRepository"
import { ICategory } from "@domain/product/ICategory"

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
        const category:Category = await this.categoryRepository.getCategoryById(request.productId);

        const productWithCategory:GetProducUseCaseResponse = 
        {
            id:product.id.getId(),
            name:product.name,
            price:product.price,
            category:{
                id:category!.id!.getId(),
                name:category.name
            }
        }
        
        return productWithCategory
    }
}

export class ProductAlreadyExistsError extends Error {}