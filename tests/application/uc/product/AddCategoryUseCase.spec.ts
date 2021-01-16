import { UuidGenerator } from "@infra/utils/UuidGenerator"
import { IResponse } from "@application/IUseCase";
import { Product } from "@domain/product/Product";
import { AddCategoryUseCase, AddCategoryUseCaseParam, CategoryAlreadyExistsError } from "@application/uc/product/AddCategoryUseCase";
import { ICategoryRepository } from "@domain/product/ICategoryRepository";
import { CategoryInMemory } from "@infra/repos/CategoryInMemory";
import { Category } from "@domain/product/Category";

const uuidGenerator = new UuidGenerator();
const uuid:string = uuidGenerator.generate();
const categoryRepo:ICategoryRepository = new CategoryInMemory();
const addCategoryUseCase:AddCategoryUseCase = new AddCategoryUseCase(categoryRepo);

const request:AddCategoryUseCaseParam = {
    name: "Papel",
    description: "Papel para multiplas finalidades",
}

describe('Testing Add Category usecase Class', () => {
    test('should create instantiate Category entity', async () => {
        await addCategoryUseCase.execute(request)
        // expect(response).toBeInstanceOf(Category);
        //verifica repositorio para ver se inseriu
        const categoryObjectsInRepo:Category[] = await categoryRepo.getCategories({})
        expect(categoryObjectsInRepo.length).toBe(1);
        
    });

    // test('should throw exists if create exists category', async () => {
    //     await addCategoryUseCase.execute(request);
    //     //error se tentar cadastrar um novo category
    //     expect(async () => await addCategoryUseCase.execute(request)).rejects.toThrow(CategoryAlreadyExistsError);
    // });
});