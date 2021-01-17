import { UuidGenerator } from "@infra/utils/UuidGenerator"
import { AddProductUseCase, AddProductUseCaseParam, ProductAlreadyExistsError} from "@application/uc/product/AddProductUseCase";
import { IResponse } from "@application/IUseCase";
import { IProductRepository } from "@domain/product/IProductRepository";
import { ProductInMemory } from "@infra/repos/ProductInMemory";
import { Product } from "@domain/product/Product";
import { UpdateProductUseCase, UpdateProductUseCaseParam } from "@application/uc/product/UpdateProductUseCase";
import { GetProductUseCase } from "@application/uc/product/GetProductUseCase";
import { CategoryInMemory } from "@infra/repos/CategoryInMemory";
import { ICategoryRepository } from "@domain/product/ICategoryRepository";

const uuidGenerator = new UuidGenerator();
const uuid:string = uuidGenerator.generate();
const productRepo:IProductRepository = new ProductInMemory();
const addProductUseCase:AddProductUseCase = new AddProductUseCase(productRepo);

const updateProductUseCase:UpdateProductUseCase = new UpdateProductUseCase(productRepo);

const request:AddProductUseCaseParam = {
    sku: "123910391",
    name: "Papel",
    description: "Papel para multiplas finalidades",
    price: 3.59,
    categoryId: uuid
}



describe('Testing Update Product usecase Class', () => {
    test('should update instantiate Product entity', async () => {
        await addProductUseCase.execute(request)
        const products:Product[] = await productRepo.getProducts({})
        const product:Product = products[0]

        product.setPrice(100)
        
        const updateUcRequest:UpdateProductUseCaseParam = {
            id: product.id.getId(),
            name: product.name,
            description: product.description, 
            sku: product.sku, 
            price: 50, 
            categoryId: product.categoryId.id
        }

        await updateProductUseCase.execute(updateUcRequest)
        
        const productsUpdated:Product[] = await productRepo.getProducts({})
        const productUpdated:Product = productsUpdated[0]

        expect(updateUcRequest.price).toBe(productUpdated.price);
        
    });
    
    // deixa passar porque não gerencia mais o id
    // test('should throw exists if create exists product', async () => {
    //     await addProductUseCase.execute(request);
    //     //error se tentar cadastrar um novo product
    //     expect(async () => await addProductUseCase.execute(request)).rejects.toThrow(ProductAlreadyExistsError);
    // });
});