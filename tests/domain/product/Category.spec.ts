import { Category, EmptyCategoryDescriptionError, EmptyCategoryNameError } from "@domain/product/Category"
import { CategoryId } from "@domain/product/CategoryId"
import { uuidGenerated } from "@application/uuidGeneratedFactory"

const uuid:string = uuidGenerated()

describe('Testing Category Entity Class', () => {
    test('should create instantiate Category entity', () => {
        const categoryIdIdVo:CategoryId = CategoryId.create(uuid)
        const name = "Papel & Cartolina"
        const description = "Todos tipos de papeis"
        const newCategory:Category = new Category(categoryIdIdVo, name, description)
        
        expect(newCategory).toBeInstanceOf(Category);
    })

    test('should throw exception if CategoryId is null and instantiate Category entity', () => {
        expect(() => {
            const categoryIdIdVo:CategoryId = CategoryId.create("")
            const name = "Papel"
            const description = "Papel para multiplas finalidades"
            const newCategory:Category = new Category(categoryIdIdVo, name, description)
        }).toThrow()
    });

    test('should throw exception if name is null', () => {
        expect(() => {
            const categoryIdIdVo:CategoryId = CategoryId.create(uuid)
            const name = ""
            const description = "Papel para multiplas finalidades"
            const newCategory:Category = new Category(categoryIdIdVo, name, description)
        }).toThrow(EmptyCategoryNameError);
    });

    test('should throw exception if description is null', () => {
        expect(() => {
            const categoryIdIdVo:CategoryId = CategoryId.create(uuid)
            const name = "Papel"
            const description = ""
            const newCategory:Category = new Category(categoryIdIdVo, name, description)
        }).toThrow(EmptyCategoryDescriptionError);
    });
});