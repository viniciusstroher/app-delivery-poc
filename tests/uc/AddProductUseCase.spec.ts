import { UuidGenerator } from "@infra/utils/UuidGenerator"
import { AddProductUseCase} from "@application/uc/add-product/AddProductUseCase";
import { IResponse } from "@application/interfaces/IUseCase";
import { IProductRepository } from "@infra/interfaces/IProductRepository";
import { ProductInMemory } from "@infra/repos/ProductInMemory";
import { ProductDTO } from "@infra/mapper/ProductMapper";

const uuidGenerator = new UuidGenerator();
const uuid:string = uuidGenerator.generate();

describe('Testing Add Product usecase Class', () => {
    test('should create instantiate Product entity', () => {
        const request:ProductDTO = {
            id: uuid,
            sku: "123910391",
            name: "Papel",
            description: "Papel para multiplas finalidades",
            price: 3.59
        }

        const productRepo:IProductRepository = new ProductInMemory();
        const addProductUseCase:AddProductUseCase = new AddProductUseCase(productRepo);
        const response:IResponse = addProductUseCase.execute(request);
        
        expect(response).toStrictEqual(request);

    });
});