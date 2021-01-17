import { Category } from "@domain/product/Category";
import { ICategoryRepository } from "@domain/product/ICategoryRepository"

export class CategoryInMemory implements ICategoryRepository{
    categories:any[] = [];
    
    async save(category:Category){
        this.categories.push(category);
    }

    async exists(category: Category): Promise<boolean>{
        // console.log('prod',product.id.getId())
        return this.categories.
                filter(categoryFilter => category.id!.getId() === categoryFilter.id.getId()).length > 0
    }

    async update(category: Category){
        this.categories = this.categories.map((categoryToAlter) => {
            if(category.id === categoryToAlter.id){
                return {...categoryToAlter, category};
            }
            return category;
        })
    }

    async delete(category: Category){
        this.categories = this.categories.filter((categoryToAlter) => {
            if(category.id === categoryToAlter.id){
                return categoryToAlter;
            }
        })
    }

    async getCategories(where: {}):Promise<Category[]>{
        return this.categories;
    }

    async getCategoryById(id: string):Promise<Category>{
        const fetch = this.categories.filter((category) => category.id.getId() === id);
        return fetch ? fetch[0] : null;
    }
}