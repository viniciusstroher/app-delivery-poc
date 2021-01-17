import { IProductRepository } from "@domain/product/IProductRepository"
import { IRequest, IResponse, IUseCase } from "@application/IUseCase"
import { Product } from "@domain/product/Product"
import { Category } from "@domain/product/Category"
import { ICategoryRepository } from "@domain/product/ICategoryRepository"

export interface GetCategoryUseCaseCaseParam extends IRequest {
    categoryId:string
}
export interface GetCategoryUseCaseResponse extends IResponse {
    id:string,
    name:string
    description:string
}

export class GetCategoryUseCase implements IUseCase{
    categoryRepository:ICategoryRepository

    constructor(categoryRepository:ICategoryRepository){
        this.categoryRepository = categoryRepository;
    }

    //criar type de params para este caso
    async execute (request: GetCategoryUseCaseCaseParam) : Promise<GetCategoryUseCaseResponse> {
        const category:Category = await this.categoryRepository.getCategoryById(request.categoryId);

        if(!category){
            throw new CategoryNotExistsError
        }

        const categoryResponse:GetCategoryUseCaseResponse = 
        {
            id:category.id!.getId(),
            name:category.name,
            description: category.description
        }
        
        return categoryResponse
    }
}

export class ProductNotExistsError extends Error {}
export class CategoryNotExistsError extends Error {}

