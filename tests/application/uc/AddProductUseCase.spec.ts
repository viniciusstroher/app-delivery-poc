import { UuidGenerator } from "@infra/utils/UuidGenerator"
import { AddProductUseCase, ProductAlreadyExistsError} from "@application/uc/add-product/AddProductUseCase";
import { IResponse } from "@application/IUseCase";
import { IProductRepository } from "@domain/product/IProductRepository";
import { ProductInMemory } from "@infra/repos/ProductInMemory";
import { ProductDTO } from "@infra/mapper/ProductMapper";
import { ICategoryRepository } from "@domain/product/ICategoryRepository";
import { CategoryInMemory } from "@infra/repos/CategoryInMemory";

const uuidGenerator = new UuidGenerator();
const uuid:string = uuidGenerator.generate();
const productRepo:IProductRepository = new ProductInMemory();
const categoryRepo:ICategoryRepository = new CategoryInMemory();
const addProductUseCase:AddProductUseCase = new AddProductUseCase(productRepo, categoryRepo);

describe('Testing Add Product usecase Class', () => {
    test('should create instantiate Product entity', async () => {
        const request:ProductDTO = {
            id: uuid,
            sku: "123910391",
            name: "Papel",
            description: "Papel para multiplas finalidades",
            price: 3.59,
            category: "Papel"
        }

        const response:IResponse = await addProductUseCase.execute(request);
        expect(response).toStrictEqual(request);
        
        //verifica repositorio para ver se inseriu
        const productObjectsInRepo = await productRepo.getProducts({})
        expect(productObjectsInRepo[0].id.getId()).toBe(uuid);
        
    });

    test('should throw exists if create exists product', async () => {
        const request:ProductDTO = {
            id: uuid,
            sku: "123910391",
            name: "Papel",
            description: "Papel para multiplas finalidades",
            price: 3.59,
            category: "Papel"
        }

        const response:IResponse = await addProductUseCase.execute(request);
        expect(response).toStrictEqual(request);
        //error se tentar cadastrar um novo product
        expect(async () => await addProductUseCase.execute(request)).rejects.toThrow(ProductAlreadyExistsError);
    });
});