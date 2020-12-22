import { IProductRepository } from "@infra/interfaces/IProductRepository";
import { IResponse, IUseCase } from "@application/interfaces/IUseCase";
import { UuidGenerator } from "@infra/utils/UuidGenerator";
import {ProductDTO, ProductMapper} from "@infra/mapper/ProductMapper"
import { ProductId } from "@domain/value-objects/ProductId";
import { Product } from "@domain/entities/Product";

export type AddProductUseCaseRequest = ProductDTO;

export class AddProductUseCase implements IUseCase{
    productRepository:IProductRepository;
    uuidGenerator:UuidGenerator;

    constructor(productRepository:IProductRepository){
        this.productRepository = productRepository;
        this.uuidGenerator = new UuidGenerator();
    }

    execute (request?: AddProductUseCaseRequest) : IResponse{
        const newProduct:Product = ProductMapper.toDomain(request);
        //entity -> mapper -> repo
        this.productRepository.save(newProduct);
        const responseUc:IResponse = ProductMapper.toDTO(newProduct);
        return responseUc;
    }
}