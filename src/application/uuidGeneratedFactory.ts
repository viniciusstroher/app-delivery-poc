import { UuidGenerator } from "@infra/utils/UuidGenerator";

export const uuidGenerated = () => {
    const uuidGenerator = new UuidGenerator();
    return uuidGenerator.generate();
}