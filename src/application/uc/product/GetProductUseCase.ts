import { IProductRepository } from "@domain/product/IProductRepository"
import { IResponse, IUseCase } from "@application/IUseCase"
import { ProductMapper} from "@infra/mapper/ProductMapper"
import { Product } from "@domain/product/Product"
import { CategoryId } from "@domain/product/CategoryId"
import { uuidGenerated } from "@application/uuidGeneratedFactory"
import { ProductId } from "@domain/product/ProductId"

export type GetProductUseCaseParam = {
    productId:string
}

export type GetProducUseCaseResponse:IResponse = {
    id:string,
    name:string
    price:string,
    category:{
        id:string,
        name:string
    }
}

export class GetProductUseCase implements IUseCase{
    productRepository:IProductRepository

    constructor(productRepository:IProductRepository){
        this.productRepository = productRepository;
    }

    //criar type de params para este caso
    async execute (request: GetProductUseCaseParam) : GetProducUseCaseResponse {
        const product:Product = this.productRepository.getCategoryById(request.productId);
        
        const category:Category = this.categoryRepository.getCategoryById(request.productId);

        const productWithCategory:GetProducUseCaseResponse = 
        {
            id:product.id.getId(),
            name:product.name,
            price:product.price,
            category:{
                id:category.id.getId(),
                name:category.name
            }
        }
        
        return productWithCategory
    }
}

export class ProductAlreadyExistsError extends Error {}