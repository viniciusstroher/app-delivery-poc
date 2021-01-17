import { CategoryInMemory } from "@infra/repos/CategoryInMemory"
import { ICategoryRepository } from "@domain/product/ICategoryRepository"
import { AddCategoryUseCase } from "@application/uc/product/AddCategoryUseCase"
import { Category } from "@domain/product/Category"
import { GetCategoryUseCase, GetCategoryUseCaseCaseParam, GetCategoryUseCaseResponse } from "@application/uc/product/GetCategoryUseCase"

const categoryRepo:ICategoryRepository = new CategoryInMemory();
const getCategoryUseCase:GetCategoryUseCase = new GetCategoryUseCase(categoryRepo);

const createCategoryToGetInUc = async () => {

    const addCategoryUseCase:AddCategoryUseCase = new AddCategoryUseCase(categoryRepo);
    await addCategoryUseCase.execute({name:"teste 1", description:"teste 2",});
    
    const categories:Category[] = await categoryRepo.getCategories({});
    return categories[0]
}

let categoryCreated:Category
let requestGetCategory:GetCategoryUseCaseCaseParam
beforeAll(async() => {
    categoryCreated = await createCategoryToGetInUc()
    requestGetCategory = {categoryId: categoryCreated.id!.getId()}
})

describe('Testing get Category usecase Class', () => {
    test('should get return usecase dto', async () => {
        const response:GetCategoryUseCaseResponse = await getCategoryUseCase.execute(requestGetCategory)
        // expect(response).toBeInstanceOf(Product);
        // //verifica repositorio para ver se inseriu
        // console.log(response)
        expect(response.id).toBe(categoryCreated.id?.getId());
    });
});