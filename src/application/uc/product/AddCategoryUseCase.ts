import { IResponse, IUseCase } from "@application/IUseCase"
import { CategoryId } from "@domain/product/CategoryId"
import { uuidGenerated } from "@application/uuidGeneratedFactory"
import { ICategoryRepository } from "@domain/product/ICategoryRepository"
import { CategoryMapper } from "@infra/mapper/CategoryMapper"
import { Category } from "@domain/product/Category"

export interface AddCategoryUseCaseParam extends IResponse {
    name:string,
    description:string,
}

export class AddCategoryUseCase implements IUseCase{
    
    categoryRepository:ICategoryRepository

    constructor(categoryRepository:ICategoryRepository){
        this.categoryRepository = categoryRepository;
    }

    //criar type de params para este caso
    async execute (request: AddCategoryUseCaseParam) : Promise<void> {
        const id:CategoryId = CategoryId.create(uuidGenerated());
        const newCategory:Category = CategoryMapper.toDomain({...request, id});
        
        // mudar exists talvez apenas para o ID
        if(newCategory && await this.categoryRepository.exists(newCategory)){
            throw new CategoryAlreadyExistsError;
        }

        this.categoryRepository.save(newCategory);
    }
}

export class CategoryAlreadyExistsError extends Error {}