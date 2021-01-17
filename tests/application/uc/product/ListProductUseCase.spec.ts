import { UuidGenerator } from "@infra/utils/UuidGenerator"
import { AddProductUseCase, AddProductUseCaseParam} from "@application/uc/product/AddProductUseCase"
import { IProductRepository } from "@domain/product/IProductRepository"
import { ProductInMemory } from "@infra/repos/ProductInMemory"
import { CategoryInMemory } from "@infra/repos/CategoryInMemory"
import { ICategoryRepository } from "@domain/product/ICategoryRepository"
import { AddCategoryUseCase } from "@application/uc/product/AddCategoryUseCase"
import { Category } from "@domain/product/Category"
import { ListProductUseCase, ListProducUseCaseResponse } from "@application/uc/product/ListProductUseCase"

const productRepo:IProductRepository = new ProductInMemory();
const categoryRepo:ICategoryRepository = new CategoryInMemory();
const listProductUseCase:ListProductUseCase = new ListProductUseCase(productRepo, categoryRepo);

const createProducts = async () => {

    const addCategoryUseCase:AddCategoryUseCase = new AddCategoryUseCase(categoryRepo);
    await addCategoryUseCase.execute({name: "teste 1", description: "teste 2",});

    const listCategory:Category[] = await categoryRepo.getCategories({})
    const insertedLastCategory:Category = listCategory[0]

    const requestAddProduct:AddProductUseCaseParam = {
        sku: "123910391",
        name: "Papel",
        description: "Papel para multiplas finalidades",
        price: 3.59,
        categoryId: insertedLastCategory.id!.getId()
    }

    const requestAddProduct2:AddProductUseCaseParam = {
        sku: "123910391 2",
        name: "Papel 2",
        description: "Papel para multiplas finalidades 2",
        price: 4.59,
        categoryId: insertedLastCategory.id!.getId()
    }

    const addProductUseCase:AddProductUseCase = new AddProductUseCase(productRepo);
    await addProductUseCase.execute(requestAddProduct);
    await addProductUseCase.execute(requestAddProduct2);
}

beforeAll(async() => {
    await createProducts()
})

describe('Testing get Product List usecase Class', () => {
    test('should list products', async () => {
        const response:ListProducUseCaseResponse = await listProductUseCase.execute()
        // expect(response).toBeInstanceOf(Product);
        // //verifica repositorio para ver se inseriu
        // console.log(response)
        expect(response.length).toBeGreaterThan(1);
    });
});