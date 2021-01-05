import { IProductRepository } from "@infra/interfaces/IProductRepository"
import { IResponse, IUseCase } from "@application/IUseCase"
import {ProductDTO, ProductMapper} from "@infra/mapper/ProductMapper"
import { Product } from "@domain/product/Product"
import { CategoryId } from "@domain/product/CategoryId";
import { uuidGenerated } from "@application/uuidGeneratedFactory";
import { ICategoryRepository } from "@domain/product/ICategoryRepository";
export class AddProductUseCase implements IUseCase{
    productRepository:IProductRepository
    categoryRepository:ICategoryRepository

    constructor(productRepository:IProductRepository, categoryRepository:ICategoryRepository){
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    async execute (request?: ProductDTO) : Promise<IResponse> {
        const categoryId:CategoryId = CategoryId.create(uuidGenerated());
        const requestParsed = {...request, categoryId};
        const newProduct:Product = ProductMapper.toDomain(requestParsed);
        // mudar exists talvez apenas para o ID
        if(newProduct && await this.productRepository.exists(newProduct)){
            throw new ProductAlreadyExistsError;
        }
        //salvar categoria antes
        //antes de salvar usar 
        // this.categoryRepository -> ProductMapper.toPersistence (revisar mapper)
        this.productRepository.save(newPrduct);
        return ProductMapper.toDTO(newProduct);
    }
}

export class ProductAlreadyExistsError extends Error {}