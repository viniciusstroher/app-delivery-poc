import { Category } from "@domain/product/Category"
import { CategoryId } from "@domain/product/CategoryId"

export class CategoryMapper {
  
  public static toDomain (category: any): Category {
    const {id, name, description} = category;
    return new Category(CategoryId.create(id), name, description);
  }

  //to repo
  public static toPersistence (category: Category): any {
    const {id, name, description} = category;
    return {
        id, 
        name, 
        description
    }
  }

  public static toDTO (category: any): CategoryDTO {
    const {id, name, description} = category;
    return {
        id: id.getId(),  
        name, 
        description
    }
  }
}

export type CategoryDTO = {
    id: string, 
    name: string, 
    description: string,
}
