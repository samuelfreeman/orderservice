import db from "../lib/db";
import type { Order } from "../types/type";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function getOrders(): Promise<Order[]> {
    try {
        const dbQuery = `
        SELECT 
          orders.id,
          customer.name AS customer,
          product.name AS product,
          orders.created_at
        FROM orders  
        JOIN customer ON orders.customerID = customer.id
        JOIN product ON orders.productID = product.id
        ORDER BY orders.created_at DESC
      `;
        const order = await db(dbQuery);
        console.log(order);
        const orders: Order[] = order as Order[];
        return orders;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export type State = {
    errors?: {
        id?: string[];
        customerID?: string[];
        productID?: string[];
        created_at?: string[];
    };
};

export async function addOrder(payload: State, formData: FormData): Promise<State> {
    try {
        const dbQuery = `INSERT INTO orders(customerID, productID) VALUES($1, $2)`;
        const customerID = formData.get('customerID') as string;
        const productID = formData.get('productID') as string;

        console.log(productID, customerID);
        const params:any = [customerID, productID];

        const result = await db(dbQuery, params);
        console.log("order added", result);
        revalidatePath("/order");
    } catch (error) {
        console.log("database error",error);
        
    }
    redirect('/order');
}





