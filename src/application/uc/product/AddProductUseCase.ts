import { IProductRepository } from "@domain/product/IProductRepository"
import { IResponse, IUseCase } from "@application/IUseCase"
import { ProductMapper} from "@infra/mapper/ProductMapper"
import { Product } from "@domain/product/Product"
import { CategoryId } from "@domain/product/CategoryId"
import { uuidGenerated } from "@application/uuidGeneratedFactory"
import { ProductId } from "@domain/product/ProductId"

export type AddProductUseCaseParam = {
    name:string,
    description: string, 
    sku: string, 
    price: number, 
    categoryId:string
}
export class AddProductUseCase implements IUseCase{
    productRepository:IProductRepository

    constructor(productRepository:IProductRepository){
        this.productRepository = productRepository;
    }

    //criar type de params para este caso
    async execute (request: AddProductUseCaseParam) : Promise<IResponse> {
        const categoryId:CategoryId = CategoryId.create(request.categoryId);
        const id:ProductId = ProductId.create(uuidGenerated());
        const newProduct:Product = ProductMapper.toDomain({...request, categoryId, id});
        
        if(newProduct && await this.productRepository.exists(newProduct)){
            throw new ProductAlreadyExistsError;
        }

        this.productRepository.save(newProduct);
        return this.productRepository.getProductById(id.getId());
    }
}

export class ProductAlreadyExistsError extends Error {}