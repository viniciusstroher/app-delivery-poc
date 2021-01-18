import { Entity } from "@domain/common/Entity"
import { IAgreggateRoot } from "@domain/common/IAgreggateRoot";
import { IOrder, IOrderItem, OrderStatus } from "./IOrder";
import { OrderId } from "./OrderId";

export class Order extends Entity implements IOrder, IAgreggateRoot{
    type: OrderStatus;
    createOrderDate: Date;
    orderItems: IOrderItem[];
    total:number;

    constructor(id: OrderId, type: OrderStatus, createOrderDate: Date, orderItems:IOrderItem[], total){
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
        this.total = total
    }

    
    addItem(item: IOrderItem): void {
        this.orderItems.push(item)
    }

    removeItem(item: IOrderItem): void {
        this.orderItems = this.orderItems.filter(orderItem => item.id!.getId() !== orderItem.id!.getId())
    }

    calculateTotal(): number {
        return this.orderItems.reduce((sum:number, orderItems:IOrderItem) => sum + orderItems.price * orderItems.quantity ,0)
    }

    setTotal(total:number): void {
        this.total = total
    }

    changeStatusToAcceptedPayment(): void {
        if(this.type == OrderStatus.Pending)
            throw new OrderMustIsPendingError
        
        this.type = OrderStatus.AcceptedPayment
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
export class OrderMustIsPendingError extends Error{}