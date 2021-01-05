import { IIdValueObject } from "@domain/common/IIdValueObject"
import { Entity } from "@domain/common/Entity"
import { ProductId } from "@domain/product/ProductId"
import { uuidGenerated } from "@application/uuidGeneratedFactory";

class DummyEntityMock extends Entity{
    name:string;

    constructor(id: IIdValueObject, name: string){
        super();
        this.id = id;
        this.name = name;
    }
}

const uuid1:string = uuidGenerated();
const uuid2:string = uuidGenerated();

describe('Testing Entity Class', () => {
    test('Diferents entities should return false', () => {
        const productIdVo1:ProductId = ProductId.create(uuid1);
        const productIdVo2:ProductId = ProductId.create(uuid2); 
        const de1 = new DummyEntityMock(productIdVo1, "Vinicius");
        const de2 = new DummyEntityMock(productIdVo2, "Vini");
        expect(!de1.equals(de2)).toBeTruthy();
    });

    test('Equals entities should return true', () => {
        const productIdVo:ProductId = ProductId.create(uuid1); 
        const de1 = new DummyEntityMock(productIdVo, "Vinicius");
        const de2 = new DummyEntityMock(productIdVo, "Vini");
        expect(de1.equals(de2)).toBeTruthy();
    });
});