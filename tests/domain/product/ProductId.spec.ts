import { ProductId } from "@domain/product/ProductId"
import { uuidGenerated } from "@application/uuidGeneratedFactory";

describe('Testing ProductId Vo Class', () => {
    test('should create Uuid if ProductId is not null', () => {
        const uuid:string = uuidGenerated()
        const productIdVo:ProductId = ProductId.create(uuid)
        expect(productIdVo.getId()).toBe(uuid)
    })

    test('should throw exception if ProductId is null', () => {
        expect(() => ProductId.create("")).toThrow()
    })
});