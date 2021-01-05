import { IIdValueObject } from "@domain/common/IIdValueObject"
import { Entity } from "@domain/common/Entity"
import { UuidGenerator } from "@infra/utils/UuidGenerator"
import { ProductId } from "@domain/product/ProductId"

class DummyEntityMock extends Entity{
    name:string;

    constructor(id: IIdValueObject, name: string){
        super();
        this.id = id;
        this.name = name;
    }
}

const uuidGenereted = () => {
    const uuidGenerator = new UuidGenerator();
    return uuidGenerator.generate();
}

const uuid1:string = uuidGenereted();
const uuid2:string = uuidGenereted();

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