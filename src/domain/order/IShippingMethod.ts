import { ValueObject } from "@domain/common/ValueObject";

export enum ShippingMethodType {
  Postal,
  Logistic
}

export interface IShippingMethod extends ValueObject{
  type:ShippingMethodType,
  description:string
}