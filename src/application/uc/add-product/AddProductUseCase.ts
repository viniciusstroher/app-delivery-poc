import { IProductRepository } from "@infra/interfaces/IProductRepository";
import { IResponse, IUseCase } from "@application/interfaces/IUseCase";
import {ProductDTO, ProductMapper} from "@infra/mapper/ProductMapper"
import { Product } from "@domain/entities/Product";

export class AddProductUseCase implements IUseCase{
    productRepository:IProductRepository;
    
    constructor(productRepository:IProductRepository){
        this.productRepository = productRepository;
    }

    execute (request?: ProductDTO) : IResponse {
        const newProduct:Product = ProductMapper.toDomain(request);
        this.productRepository.save(newProduct);
        return ProductMapper.toDTO(newProduct);
    }
}