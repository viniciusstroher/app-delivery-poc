import { Category } from "@domain/product/Category"
import { CategoryId } from "@domain/product/CategoryId"

export class CategoryMapper {
  public static toDomain (category: any): Category {
    const {id, name, description} = category;
    return new Category(id, name, description);
  }
}