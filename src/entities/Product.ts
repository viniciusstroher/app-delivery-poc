import { IProduct } from "../domain/interfaces/IProduct";
import { Entity } from "./Entity";

// export default Product implements
export class Product extends Entity implements IProduct{
    sku: number = 0;
    name: string = "";
    price: number = 0.0;

    constructor(){
        super();
    }
}