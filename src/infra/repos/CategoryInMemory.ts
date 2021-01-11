import { ICategoryRepository } from "@domain/product/ICategoryRepository"

export class CategoryInMemory implements ICategoryRepository{
    categories:any[] = [];
    
    async save(product:any){
        this.categories.push(product);
    }

    async exists(category: any): Promise<boolean>{
        // console.log('prod',product.id.getId())
        return this.categories.
                filter(categoryFilter => category.id.getId() === categoryFilter.id.getId()).length > 0
    }

    async update(category: any){
        this.categories = this.categories.map((categoryToAlter) => {
            if(category.id === categoryToAlter.id){
                return {...categoryToAlter, category};
            }
            return category;
        })
    }

    async getCategories(where: {}):Promise<any[]>{
        return this.categories;
    }

    async getCategoryById(id: string):Promise<any>{
        const fetch = this.categories.filter((category) => category.id.getId() === id);
        return fetch ? fetch[0] : null;
    }
}