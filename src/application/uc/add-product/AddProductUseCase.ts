import { IIdValueObject } from "@domain/interfaces/value-objects/IIdValueObject";
import { ProductId } from "@domain/value-objects/ProductId";
import { IProductRepository } from "@infra/interfaces/IProductRepository";
import { IRequest, IResponse, IUseCase } from "@application/interfaces/IUseCase";
import { UuidGenerator } from "@infra/utils/UuidGenerator";
import { Product } from "@domain/entities/Product";
import { IEntity } from "@domain/interfaces/entities/IEntity";
import { IProduct } from "@domain/interfaces/entities/IProduct";

export interface AddProductUseCaseRequest extends IRequest{
    data:{
        name: string,
        price: number,
        sku: string
    }
}

export interface AddProductUseCaseResponse extends IRequest{
    data:{
        name: string,
        price: number,
        sku: string
    }
}

export class AddProductUseCase implements IUseCase{
    productRepository:IProductRepository;
    
    constructor(productRepository:IProductRepository){
        this.productRepository = productRepository;
    }

    execute (request?: AddProductUseCaseRequest) : IResponse{
        if(!request?.data.name){
            throw new Error("Produto deve conter nome")
        }
        
        // const productEntityToProductDto: = chamarMapper+-
        //do logic
        const uuidGenerator = new UuidGenerator();
        const uuid = uuidGenerator.generate();
        const productIdVo:ProductId = ProductId.create(uuid);

        const sku:string = "123910391";
        const name = "Papel";
        const description = "Papel para multiplas finalidades";
        const price:number = 3.59
        const newProduct:Product = new Product(productIdVo, sku, name, description, price)
        
        this.productRepository.save(newProduct)
        //repo to mapper
        const returnMock:IResponse = {data: {name: "Produto 1", price: 1.0, sky: "uuuu-uuuu-uuu-uuuu"}};
        return returnMock;
    }
}