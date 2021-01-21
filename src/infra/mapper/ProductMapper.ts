
import { Product } from "@domain/product/Product"
export class ProductMapper {
  public static toDomain (product: any): Product {
    const {id, sku, name, description, price, categoryId} = product;
    return new Product(id, sku,  name, description, price, categoryId);
  }
}
