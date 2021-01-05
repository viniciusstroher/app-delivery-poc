
import { ProductId } from "@domain/product/ProductId"
import { EmptyProductNameError, EmptySkuError, Product } from "@domain/product/Product";
import { uuidGenereted } from "@tests/uuidGeneratedFactory";

const uuid:string = uuidGenereted();

describe('Testing Product Entity Class', () => {
    test('should create instantiate Product entity', () => {
        const productIdVo:ProductId = ProductId.create(uuid);
        const sku:string = "123910391";
        const name = "Papel";
        const description = "Papel para multiplas finalidades";
        const price:number = 3.59
        const newProduct:Product = new Product(productIdVo, sku, name, description, price)
        expect(newProduct).toBeInstanceOf(Product);
    });

    test('should throw exception if productId is null and instantiate product entity', () => {
        expect(() => {
            const productIdVo:ProductId = ProductId.create("");
            const sku:string = "123910391";
            const name = "Papel";
            const description = "Papel para multiplas finalidades";
            const price:number = 3.59
            const newProduct:Product = new Product(productIdVo, sku, name, description, price)
        }).toThrow();
    });

    test('should throw exception if sku is null', () => {
        expect(() => {
            const productIdVo:ProductId = ProductId.create(uuid);
            const sku:string = "";
            const name = "Papel";
            const description = "Papel para multiplas finalidades";
            const price:number = 3.59
            const newProduct:Product = new Product(productIdVo, sku, name, description, price)
        }).toThrow(EmptySkuError);
    });

    test('should throw exception if name is null', () => {
        expect(() => {
            const productIdVo:ProductId = ProductId.create(uuid);
            const sku:string = "123910391";
            const name = "";
            const description = "Papel para multiplas finalidades";
            const price:number = 3.59
            const newProduct:Product = new Product(productIdVo, sku, name, description, price)
        }).toThrow(EmptyProductNameError);
    });
});