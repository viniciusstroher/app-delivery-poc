import { UuidGenerator } from "@infra/utils/UuidGenerator"
import { ProductId } from "@domain/value-objects/ProductId"

describe('Testing ProductId Vo Class', () => {
    test('should create Uuid if productId is not null', () => {
        const uuidGenerator = new UuidGenerator();
        const uuid:string = uuidGenerator.generate();
        
        const productIdVo:ProductId = ProductId.create(uuid);
        expect(productIdVo.getId()).toBe(uuid);
    });

    test('should throw exception if productId is null', () => {
        expect(() => ProductId.create("")).toThrow();
    });
});