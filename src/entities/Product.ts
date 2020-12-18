import { IProduct } from "../domain/interfaces/IProduct";
import { Entity } from "./Entity";

// export default Product implements
export class Product extends Entity implements IProduct{
    sku: string = 0;
    name: string = "";
    price: number = 0.0;

    constructor(sku:string, name:string, price:number){
        super();
        this.sku = sku;
        this.name = name;
        this.price = price
    }

    updatePrice(price:number){
        if(price < 1.0){
            throw new PriceMinorThanOne
        }
        this.price = price;
    }
}

export class PriceMinorThanOne extends Error{}