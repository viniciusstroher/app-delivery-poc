
import { uuidGenerated } from "@application/uuidGeneratedFactory"
import { CategoryId } from "@domain/product/CategoryId"

describe('Testing CategoryId Vo Class', () => {
    test('should create Uuid if CategoryId is not null', () => {
        const uuid:string = uuidGenerated()
        const categoryIdVo:CategoryId = CategoryId.create(uuid);
        expect(categoryIdVo.getId()).toBe(uuid)
    })

    test('should throw exception if CategoryId is null', () => {
        expect(() => CategoryId.create("")).toThrow()
    })
});