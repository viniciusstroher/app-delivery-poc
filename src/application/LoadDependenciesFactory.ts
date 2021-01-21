import { ICategoryRepository } from "@domain/product/ICategoryRepository";
import { IProductRepository } from "@domain/product/IProductRepository";
import { IProductQueryService } from "./queries/IProductQueryService";

//adicionar os repos do sistema e as queries.
//se quiser adicionar os ucs
//ou algum helper 

export type Container = {
    productRepository: IProductRepository | null, 
    productQueryService: IProductQueryService | null,
    categoryRepository: ICategoryRepository | null
}

export class LoadDependenciesFactory{
    static container:Container
    static load(): Container{
        if(!LoadDependenciesFactory.container){
            //carrega todas dependencias do sistema
            LoadDependenciesFactory.container=
            {productRepository: null,
            productQueryService: null,
            categoryRepository: null
            }
        }
        return LoadDependenciesFactory.container
    }
}