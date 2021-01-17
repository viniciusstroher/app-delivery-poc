import { IProductRepository } from "@domain/product/IProductRepository"
import { IRequest, IResponse, IUseCase } from "@application/IUseCase"
import { ProductMapper} from "@infra/mapper/ProductMapper"
import { Product } from "@domain/product/Product"
import { CategoryId } from "@domain/product/CategoryId"
import { uuidGenerated } from "@application/uuidGeneratedFactory"
import { ProductId } from "@domain/product/ProductId"

export interface UpdateProductUseCaseParam extends IRequest {
    id:string | null,
    name:string,
    description: string, 
    sku: string, 
    price: number, 
    categoryId:string
}

export class UpdateProductUseCase implements IUseCase{
    productRepository:IProductRepository

    constructor(productRepository:IProductRepository){
        this.productRepository = productRepository;
    }

    //criar type de params para este caso
    async execute (request: UpdateProductUseCaseParam) : Promise<void> {
        const categoryId:CategoryId = CategoryId.create(request.categoryId);
        const id:ProductId = ProductId.create(request.id!);
        const newProduct:Product = ProductMapper.toDomain({...request, categoryId, id});
        
        if(newProduct && await !this.productRepository.exists(newProduct)){
            throw new ProductAlreadyExistsError;
        }
        
        this.productRepository.update(newProduct);
    }
}

export class ProductAlreadyExistsError extends Error {}