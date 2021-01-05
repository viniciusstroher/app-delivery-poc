import { IEntity } from "@domain/common/IEntity";
import { CategoryId } from "./CategoryId";

export interface ICategory extends IEntity{
  name: string;
  description: string;
}