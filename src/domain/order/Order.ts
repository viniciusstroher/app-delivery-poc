import { Entity } from "@domain/common/Entity"
import { IAgreggateRoot } from "@domain/common/IAgreggateRoot";
import { ValueObject } from "@domain/common/ValueObject";
import { IOrder, IOrderItem, OrderStatus } from "./IOrder";
import { IPaymentMethod } from "./IPaymentMethod";
import { IShippingMethod } from "./IShippingMethod";
import { OrderId } from "./OrderId";

export class Order extends Entity implements IOrder, IAgreggateRoot{
    id: OrderId
    type: OrderStatus;
    createOrderDate: Date;
    orderItems: IOrderItem[];
    total:number;
    paymentMethod:IPaymentMethod | null;
    shippingMethod: IShippingMethod | null;

    //fazer bc de invoice e bc de shipping
    constructor(id: OrderId, type: OrderStatus, createOrderDate: Date, orderItems:IOrderItem[], paymentMethod:PaymentMethod, shippingMethod:ShippingMethod){
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
        this.total = this.calculateTotal()
        
        this.paymentMethod = null
        if(paymentMethod){
            this.paymentMethod = paymentMethod
        }
        
        this.shippingMethod = null
        if(shippingMethod){
            this.shippingMethod = shippingMethod
        }
    }

    addItem(item: IOrderItem): void {
        if(this.type !== OrderStatus.Pending)
            throw OrderChangeOrderAfterPendingError
        this.orderItems.push(item)
    }

    removeItem(item: IOrderItem): void {
        if(this.type !== OrderStatus.Pending)
            throw OrderChangeOrderAfterPendingError
        this.orderItems = this.orderItems.filter(orderItem => item.id!.getId() !== orderItem.id!.getId())
    }

    setOrderItemOrder(item: IOrderItem, order:number): void {
        this.orderItems = this.orderItems.splice(order, 0, item)
    }

    calculateTotal(): number {
        return this.orderItems.reduce((sum:number, orderItems:IOrderItem) => sum + orderItems.price * orderItems.quantity ,0)
    }

    changeStatusToAcceptedPayment(): void {
        if(this.type == OrderStatus.Pending)
            throw new OrderMustIsPendingError
        
        this.type = OrderStatus.AcceptedPayment
    }

    changeStatusToShipping(): void {
        if(this.type == OrderStatus.AcceptedPayment)
            throw new OrderMustIsAcceptedPaymentError
        
        this.type = OrderStatus.Shipping
    }

    changeStatusToComplete(): void {
        if(this.type == OrderStatus.Shipping)
            throw new OrderMustIsShippingPaymentError
        
        this.type = OrderStatus.Complete
    }

    changeStatusToCancealled(): void {
        this.type = OrderStatus.Cancelled
    }

}

export class EmptyOrderIdError extends Error{}
export class EmptyOrderTypeError extends Error{}
export class EmptyOrderDateError extends Error{}
export class OrderMustIsPendingError extends Error{}
export class OrderMustIsAcceptedPaymentError extends Error{}
export class OrderMustIsShippingPaymentError extends Error{}
export class OrderChangeOrderAfterPendingError extends Error{}

