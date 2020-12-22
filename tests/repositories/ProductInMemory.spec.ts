import { Product } from "@domain/entities/Product";
import { ProductId } from "@domain/value-objects/ProductId";
import { ProductInMemory } from "@infra/repos/ProductInMemory";
import { UuidGenerator } from "@infra/utils/UuidGenerator";

const uuidGenereted = () => {
    const uuidGenerator = new UuidGenerator();
    return uuidGenerator.generate();
}

const uuid:string = uuidGenereted();
const productInMemory:ProductInMemory = new ProductInMemory();

describe('Testing ProductInMemory Class', () => {
    test('add new Product into repo', async () => {
        const productIdVo:ProductId = ProductId.create(uuid);
        const sku:string = "123910391";
        const name = "Papel";
        const description = "Papel para multiplas finalidades";
        const price:number = 3.59
        const newProduct:Product = new Product(productIdVo, sku, name, description, price)
        
        productInMemory.save(newProduct);
        const productObjectsInRepo = await productInMemory.getProducts({})
        
        expect(productObjectsInRepo[0].id.getId()).toBe(newProduct.id.getId());
    });

});