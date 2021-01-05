import { CategoryId } from "@domain/product/CategoryId";
import { uuidGenerated } from "../src/application/uuidGeneratedFactory";

export const newCategoryId = () => {
    return CategoryId.create(uuidGenerated());
}