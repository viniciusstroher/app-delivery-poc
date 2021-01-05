import { ProductId } from "@domain/product/ProductId"
import { uuidGenereted } from "@tests/uuidGeneratedFactory";

describe('Testing ProductId Vo Class', () => {
    test('should create Uuid if ProductId is not null', () => {
        const uuid:string = uuidGenereted()
        const productIdVo:ProductId = ProductId.create(uuid)
        expect(productIdVo.getId()).toBe(uuid)
    })

    test('should throw exception if ProductId is null', () => {
        expect(() => ProductId.create("")).toThrow()
    })
});