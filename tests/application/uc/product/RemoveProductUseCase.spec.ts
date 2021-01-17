import { AddProductUseCase, AddProductUseCaseParam} from "@application/uc/product/AddProductUseCase"
import { IProductRepository } from "@domain/product/IProductRepository"
import { ProductInMemory } from "@infra/repos/ProductInMemory"
import { Product } from "@domain/product/Product"
import { GetProductUseCase, GetProductUseCaseParam, GetProducUseCaseResponse } from "@application/uc/product/GetProductUseCase"
import { CategoryInMemory } from "@infra/repos/CategoryInMemory"
import { ICategoryRepository } from "@domain/product/ICategoryRepository"
import { AddCategoryUseCase } from "@application/uc/product/AddCategoryUseCase"
import { Category } from "@domain/product/Category"
import { RemoveProductUseCase } from "@application/uc/product/RemoveProductUseCase"

const productRepo:IProductRepository = new ProductInMemory();
const categoryRepo:ICategoryRepository = new CategoryInMemory();
const removeProductUseCase:RemoveProductUseCase = new RemoveProductUseCase(productRepo);

const createProductToGetInUc = async () => {

    const addCategoryUseCase:AddCategoryUseCase = new AddCategoryUseCase(categoryRepo);
    await addCategoryUseCase.execute({name:"teste 1", description:"teste 2",});

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
        sku: "1239103912",
        name: "Papel2",
        description: "Papel para multiplas finalidades2",
        price: 3.59,
        categoryId: insertedLastCategory.id!.getId()
    }

    const addProductUseCase:AddProductUseCase = new AddProductUseCase(productRepo);
    await addProductUseCase.execute(requestAddProduct);
    await addProductUseCase.execute(requestAddProduct2);
    
    const listProducts:Product[] = await productRepo.getProducts({})
    const insertedLastProduct:Product = listProducts[0]

    const requestGetProduct:GetProductUseCaseParam = {
        productId: insertedLastProduct.id.getId()
    }

    return requestGetProduct
}

let requestGetProduct:GetProductUseCaseParam
beforeAll(async() => {
    requestGetProduct = await createProductToGetInUc()
})

describe('Testing remove Product usecase Class', () => {
    test('should delete instantiate Product entity', async () => {
        await removeProductUseCase.execute(requestGetProduct)
        const listProducts:Product[] = await productRepo.getProducts({})
        // expect(response).toBeInstanceOf(Product);
        // //verifica repositorio para ver se inseriu
        // console.log(response)
        expect(listProducts.length).toBe(1);
    });
});