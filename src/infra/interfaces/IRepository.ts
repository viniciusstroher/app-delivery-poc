import { IEntity } from "@domain/interfaces/entities/IEntity";

export interface IRepository{
    save(entity:IEntity):void;
    update(id:string, entity:IEntity):void;
}