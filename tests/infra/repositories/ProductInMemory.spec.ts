import { Product } from "@domain/product/Product"
import { ProductId } from "@domain/product/ProductId"
import { ProductInMemory } from "@infra/repos/ProductInMemory"
import { uuidGenerated } from "@application/uuidGeneratedFactory";
import { newCategoryId } from "@tests/newIdValueObjectFactory"
import { CategoryId } from "@domain/product/CategoryId";

const uuid:string = uuidGenerated();
const productInMemory:ProductInMemory = new ProductInMemory();
const categoryId:CategoryId = newCategoryId();
describe('Testing ProductInMemory Class', () => {
    test('add new Product into repo', async () => {
        const productIdVo:ProductId = ProductId.create(uuid);
        const sku:string = "123910391";
        const name = "Papel";
        const description = "Papel para multiplas finalidades";
        const price:number = 3.59
        
        const newProduct:Product = new Product(productIdVo, sku, name, description, price,categoryId)
        
        productInMemory.save(newProduct);
        const productObjectsInRepo = await productInMemory.getProducts({})
        
        expect(productObjectsInRepo[0].id.getId()).toBe(newProduct.id.getId());
    });

});