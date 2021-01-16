import { UuidGenerator } from "@infra/utils/UuidGenerator"
import { AddProductUseCase, AddProductUseCaseParam, ProductAlreadyExistsError} from "@application/uc/product/AddProductUseCase";
import { IResponse } from "@application/IUseCase";
import { IProductRepository } from "@domain/product/IProductRepository";
import { ProductInMemory } from "@infra/repos/ProductInMemory";
import { Product } from "@domain/product/Product";

const uuidGenerator = new UuidGenerator();
const uuid:string = uuidGenerator.generate();
const productRepo:IProductRepository = new ProductInMemory();
const addProductUseCase:AddProductUseCase = new AddProductUseCase(productRepo);

const request:AddProductUseCaseParam = {
    sku: "123910391",
    name: "Papel",
    description: "Papel para multiplas finalidades",
    price: 3.59,
    categoryId: uuid
}

describe('Testing Add Product usecase Class', () => {
    test('should create instantiate Product entity', async () => {
        await addProductUseCase.execute(request)
        // expect(response).toBeInstanceOf(Product);
        //verifica repositorio para ver se inseriu
        const productObjectsInRepo:Product[] = await productRepo.getProducts({})
        expect(productObjectsInRepo.length).toBe(1);
        
    });
    
    // deixa passar porque não gerencia mais o id
    // test('should throw exists if create exists product', async () => {
    //     await addProductUseCase.execute(request);
    //     //error se tentar cadastrar um novo product
    //     expect(async () => await addProductUseCase.execute(request)).rejects.toThrow(ProductAlreadyExistsError);
    // });
});