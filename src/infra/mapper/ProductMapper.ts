
import { Product } from "@domain/product/Product"
export class ProductMapper {
  public static toDomain (product: any): Product {
    const {id, sku, name, description, price, categoryId} = product;
    return new Product(id, sku,  name, description, price, categoryId);
  }

  // public static toDTO (product: any): ProductDTO {
  //   const {id, sku, name, description, price, category} = product;
  //   return {
  //       id: id.getId(), 
  //       sku,  
  //       name, 
  //       description, 
  //       price,
  //       category: category.name
  //   }
  // }
}

// export type ProductDTO = {
//     id: string, 
//     sku: string,  
//     name: string, 
//     description: string, 
//     price: number,
//     category: string
// }
