import { ProductId } from "@domain/value-objects/ProductId";
import { IProductRepository } from "@infra/interfaces/IProductRepository";
import { IRequest, IResponse, IUseCase } from "@application/interfaces/IUseCase";
import { UuidGenerator } from "@infra/utils/UuidGenerator";
import { Product } from "@domain/entities/Product";
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
        
        //entity -> mapper -> repo
        this.productRepository.save(newProduct)
        
        const responseUc:IResponse = {data:{
            name,
            price,
            sku
        }};

        return responseUc;
    }
}