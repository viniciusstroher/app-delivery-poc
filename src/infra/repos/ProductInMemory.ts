import { IProductRepository } from "@infra/interfaces/IProductRepository";

export class ProductInMemory implements IProductRepository{
    products:any[] = [];
    
    async save(product:any){
        this.products.push(product);
    }

    async exists(product: any): Promise<boolean>{
        // console.log('prod',product.id.getId())
        return this.products.
                filter(product => product.id.getId() === product.id.getId()).length > 0
    }

    async update(product: any){
        this.products = this.products.map((productToAlter) => {
            if(product.id === productToAlter.id){
                return {...productToAlter, product};
            }
            return product;
        })
    }

    async getProducts(where: {}):Promise<any[]>{
        return this.products;
    }

    async getProductById(id: string):Promise<any>{
        return this.products.filter((product) => product.id === id)
    }
}