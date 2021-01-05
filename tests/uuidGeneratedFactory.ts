import { UuidGenerator } from "@infra/utils/UuidGenerator";

export const uuidGenereted = () => {
    const uuidGenerator = new UuidGenerator();
    return uuidGenerator.generate();
}