import { IProductRepository } from "@domain/product/IProductRepository"
import { IRequest, IUseCase } from "@application/IUseCase"
import { Product } from "@domain/product/Product"

export interface RemoveProductUseCaseParam extends IRequest {
    productId:string
}

export class RemoveProductUseCase implements IUseCase{
    productRepository:IProductRepository
    
    constructor(productRepository:IProductRepository){
        this.productRepository = productRepository;
    }

    //criar type de params para este caso
    async execute (request: RemoveProductUseCaseParam) : Promise<void> {
        const product:Product = await this.productRepository.getProductById(request.productId);

        if(!product){
            throw new ProductNotExistsError
        }
        
        await this.productRepository.delete(product);
    }
}

export class ProductNotExistsError extends Error {}
export class CategoryNotExistsError extends Error {}

