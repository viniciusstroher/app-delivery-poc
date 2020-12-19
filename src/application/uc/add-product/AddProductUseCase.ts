import { IProductRepository } from "../../../infra/interfaces/IProductRepository";
import { IRequest, IResponse, IUseCase } from "../../interfaces/IUseCase";

export interface AddProductUseCaseRequest extends IRequest{
    data:{
        name:string,
        price:number,
        sku:string
    }
}

export interface AddProductUseCaseResponse extends IRequest{
    data:{
        name:string,
        price:number,
        sku:string
    }
}

export class AddProductUseCase implements IUseCase{
    productRepository:IProductRepository;
    
    constructor(productRepository:IProductRepository){
        this.productRepository = productRepository;
    }

    execute (request?: AddProductUseCaseResponse) : IResponse{
        if(!request?.data.name){
            throw new Error("Produto deve conter nome")
        }
        
        // const productEntityToProductDto: = chamarMapper+-
        //do logic
        this.productRepository.save()
        //repo to mapper
        const returnMock:IResponse = {data: {name: "Produto 1", price: 1.0, sky: "uuuu-uuuu-uuu-uuuu"}};
        return returnMock;
    }
}