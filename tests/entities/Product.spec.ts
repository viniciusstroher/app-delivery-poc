import { Entity } from "../../src/entities/Product";

describe('Testing Entity Class', () => {
    test('Diferents entities should return false', () => {
        const de1 = new DummyEntityMock(1, "Vinicius");
        const de2 = new DummyEntityMock(2, "Vini");
        expect(!de1.equals(de2)).toBeTruthy();
    });

    test('Equals entities should return true', () => {
        const de1 = new DummyEntityMock(1, "Vinicius");
        const de2 = new DummyEntityMock(1, "Vini");
        expect(de1.equals(de2)).toBeTruthy();
    });
});