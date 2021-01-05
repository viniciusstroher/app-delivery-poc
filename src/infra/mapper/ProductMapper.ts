import { Product } from "@domain/product/Product"
import { ProductId } from "@domain/product/ProductId"
export class ProductMapper {
  public static toDomain (raw: any): Product {
    const {id, sku, name, description, price } = raw;
    return new Product(ProductId.create(id), sku,  name, description, price);
  }

  //to repo
  public static toPersistence (product: Product): any {
    const {id, sku, name, description, price} = product;
    return {
        id, 
        sku,  
        name, 
        description, 
        price
    }
  }

  public static toDTO (product: Product): ProductDTO {
    const {id, sku, name, description, price} = product;
    return {
        id: id.getId(), 
        sku,  
        name, 
        description, 
        price
    }
  }
}

export type ProductDTO = {
    id: string, 
    sku: string,  
    name: string, 
    description: string, 
    price: number
}
