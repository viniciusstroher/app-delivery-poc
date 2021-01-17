import { IProductRepository } from "@domain/product/IProductRepository"
import { IRequest, IResponse, IUseCase } from "@application/IUseCase"
import { Product } from "@domain/product/Product"
import { Category } from "@domain/product/Category"
import { ICategoryRepository } from "@domain/product/ICategoryRepository"
import { GetProducUseCaseResponse } from "./GetProductUseCase"

export type ListProducUseCaseResponse = GetProducUseCaseResponse[]

export class ListProductUseCase implements IUseCase{
    productRepository:IProductRepository
    categoryRepository:ICategoryRepository

    constructor(productRepository:IProductRepository, categoryRepository:ICategoryRepository){
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    //criar type de params para este caso
    async execute () : Promise<ListProducUseCaseResponse> {
        const products:Product[] = await this.productRepository.getProducts({});
        const categories:Category[] = await this.categoryRepository.getCategories({});

        let listProductsResponse:ListProducUseCaseResponse = []

        for(const product of products){
            const categoryOfItem = categories.find(categorie => categorie.id!.getId() === product.categoryId.id)
            if(!categoryOfItem){
                continue
            }

            const productWithCategoryResponse:GetProducUseCaseResponse = 
            {
                id:product.id.getId(),
                name:product.name,
                price:product.price,
                category:{
                    id:categoryOfItem!.id!.getId(),
                    name:categoryOfItem.name
                }
            }

            listProductsResponse = [...listProductsResponse, productWithCategoryResponse]
        }
        
        return listProductsResponse
    }
}

