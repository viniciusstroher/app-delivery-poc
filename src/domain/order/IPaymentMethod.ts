import { ValueObject } from "@domain/common/ValueObject";

export enum PaymentMethodType {
    Cash,
    CreditCard,
    DebitCard,
    Transfer
}

export interface IPaymentMethod extends ValueObject{
    type:PaymentMethodType
    description:string
}