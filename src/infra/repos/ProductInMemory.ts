import { uuidGenerated } from "@application/uuidGeneratedFactory";
import { IProductRepository } from "@domain/product/IProductRepository"
import { Product } from "@domain/product/Product";
export class ProductInMemory implements IProductRepository{
    products:any[] = [];
    
    async save(product: Product){
        this.products.push(product);
    }

    async exists(product: Product): Promise<boolean>{
        return this.products.
                filter(productFilter => productFilter.id.getId() === product.id.getId()).length > 0
    }

    async update(product: Product){
        this.products = this.products.map((productToAlter) => {
            if(product.id === productToAlter.id){
                return {...productToAlter, product};
            }
            return product;
        })
    }

    async delete(product: Product){
        this.products = this.products.filter((productToAlter) => {
            if(product.id.getId() !== productToAlter.id.getId()){
                return productToAlter;
            }
        })
    }

    async getProducts(where: {}):Promise<Product[]>{
        //carrega categoria
        //VO
        //const category = {category: {id: uuidGenerated(), name: "Cat1"}}
        //return this.products.map(product => ({...product, category}))
        return this.products
    }

    async getProductById(id: string):Promise<Product>{
        //carrega categoria - implementar dentro do repo
        //VO
        const fetch = this.products.filter((product) => product.id.getId() === id);
        return fetch ? fetch[0] : null
    }
}