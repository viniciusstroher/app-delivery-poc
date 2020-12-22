import { IProductRepository } from "@infra/interfaces/IProductRepository";
import { IRequest, IResponse, IUseCase } from "@application/interfaces/IUseCase";
import { IOrder } from "@domain/interfaces/entities/IOrder";
import { IOrderRepository } from "@infra/interfaces/IOrderRepository";
import { ProductId } from "@domain/value-objects/ProductId";

export type ProductLine = {
    productRef:ProductId;
    quantity: number;
}

export interface CreateOrderUseCaseRequest extends IRequest{
    data:{
        products: ProductLine[]  
    }
}

export interface CreateOrderUseCaseResponse extends IRequest{
    data:{
        order:IOrder,
        date: Date
    }
}

export class CreateOrderUseCase implements IUseCase{
    productRepository:IProductRepository;
    orderRepository:IOrderRepository;
    
    constructor(productRepository:IProductRepository, orderRepository:IOrderRepository){
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
    }

    execute (request?: CreateOrderUseCaseRequest) : IResponse{
        // if(!request?.data.name){
        //     throw new Error("Produto deve conter nome")
        // }
        
        // // const productEntityToProductDto: = chamarMapper+-
        // //do logic
        // const uuidGenerator = new UuidGenerator();
        // const uuid = uuidGenerator.generate();
        // const productId:IIdValueObject = ProductId.create(uuid);

        
        // this.productRepository.save()
        // //repo to mapper
        const returnMock:IResponse = {data: {name: "Produto 1", price: 1.0, sky: "uuuu-uuuu-uuu-uuuu"}};
        return returnMock;
    }
}