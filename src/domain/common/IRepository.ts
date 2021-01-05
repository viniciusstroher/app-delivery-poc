import { IEntity } from "./IEntity";

export interface IRepository{
    save(entity:IEntity):void;
    update(entity:IEntity):void;
    exists(entity:IEntity):Promise<boolean>;
}