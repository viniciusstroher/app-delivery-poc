import { Category } from "@domain/product/Category";
import { newCategoryId } from "./newIdValueObjectFactory"

export const newCategory = () => {
    return new Category(newCategoryId(), "Papel", "melhor papel do mundo");
}