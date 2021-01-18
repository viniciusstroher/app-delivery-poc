import { Entity } from "@domain/common/Entity"
import { IAgreggateRoot } from "@domain/common/IAgreggateRoot";
import { IOrder, IOrderItem, OrderStatus } from "./IOrder";
import { OrderId } from "./OrderId";

export class Order extends Entity implements IOrder, IAgreggateRoot{
    type: OrderStatus;
    createOrderDate: Date;
    orderItems: IOrderItem[];

    constructor(id: OrderId, type: OrderStatus, createOrderDate: Date, orderItems:IOrderItem[]){
        super();
        
        if(!id){
            throw new EmptyOrderIdError
        }

        if(!type){
            throw new EmptyOrderTypeError
        }
        
        if(!createOrderDate){
            throw new EmptyOrderDateError
        }

        this.id = id;
        this.type = type
        this.createOrderDate = createOrderDate
        this.orderItems = orderItems
    }

    
    addItem(item: IOrderItem): void {
        throw new Error("Method not implemented.");
    }

    removeItem(item: IOrderItem): void {
        throw new Error("Method not implemented.");
    }

    calculateTotal(): number {
        throw new Error("Method not implemented.");
    }

    setTotal(): void {
        throw new Error("Method not implemented.");
    }

    changeStatusToAcceptedPayment(): void {
        throw new Error("Method not implemented.");
    }

    changeStatusToShipping(): void {
        throw new Error("Method not implemented.");
    }

    changeStatusToComplete(): void {
        throw new Error("Method not implemented.");
    }
    
    changeStatusToCancealled(): void {
        throw new Error("Method not implemented.");
    }

}

export class EmptyOrderIdError extends Error{}
export class EmptyOrderTypeError extends Error{}
export class EmptyOrderDateError extends Error{}