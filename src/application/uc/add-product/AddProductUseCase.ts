import { IProductRepository } from "@domain/product/IProductRepository"
import { IResponse, IUseCase } from "@application/IUseCase"
import { ProductMapper} from "@infra/mapper/ProductMapper"
import { Product } from "@domain/product/Product"
import { CategoryId } from "@domain/product/CategoryId"
import { uuidGenerated } from "@application/uuidGeneratedFactory"
import { ICategoryRepository } from "@domain/product/ICategoryRepository"
import { CategoryMapper } from "@infra/mapper/CategoryMapper"
import { Category } from "@domain/product/Category"
import { ProductId } from "@domain/product/ProductId"

export class AddProductUseCase implements IUseCase{
    productRepository:IProductRepository
    categoryRepository:ICategoryRepository

    constructor(productRepository:IProductRepository, categoryRepository:ICategoryRepository){
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    //criar type de params para este caso
    async execute (request?: any) : Promise<IResponse> {
        const categoryId:CategoryId = CategoryId.create(uuidGenerated());
        const categoryData = {id: categoryId, 
                            name: request?.category};
        const newCategory:Category = CategoryMapper.toDomain(categoryData);
        
        const productId:ProductId = ProductId.create(uuidGenerated());
        const productData = {id: productId,
                             sku: request.sku, 
                             name: request.name, 
                             description: request.description, 
                             price: request.price, 
                             categoryId}

        const newProduct:Product = ProductMapper.toDomain(productData);
        // mudar exists talvez apenas para o ID
        if(!this.categoryRepository.exists(newCategory)){
            this.categoryRepository.save(CategoryMapper.toPersistence(newCategory));
        }

        if(newProduct && await this.productRepository.exists(newProduct)){
            throw new ProductAlreadyExistsError;
        }

        this.productRepository.save(ProductMapper.toPersistence(newProduct));
        return this.productRepository.getProductById(productId.getId());
    }
}

export class ProductAlreadyExistsError extends Error {}