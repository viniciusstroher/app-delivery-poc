import { UuidGenerator } from "@infra/utils/UuidGenerator"
import { ProductId } from "@domain/value-objects/ProductId"

describe('Testing ProductId Vo Class', () => {
    test('Uuid return true', () => {
        const uuidGenerator = new UuidGenerator();
        const uuid:string = uuidGenerator.generate();
        
        const productIdVo:ProductId = ProductId.create(uuid);
        expect(productIdVo.getId()).toBe(uuid);
    });
});