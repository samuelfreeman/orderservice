import db from "../lib/db";
import type { Customer } from "../types/type";
import { revalidatePath, unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";
export async function getCustomers(): Promise<Customer[]> {
    try {
        unstable_noStore()
        const dbQuery = `SELECT * FROM customer`
        const customers = await db(dbQuery)
        console.log(customers)
        const customer: Customer[] = customers as Customer[]
        return customer;
    } catch (error) {
        console.log(error)
        return []
    }
}

export type State = {
    errors?: {
        name?: string[]
        email?: string[]
        phone?: string[]
        created_at?: string[]
    }
}

export async function addCustomer(payload: State, formData: FormData): Promise<State> {
    try {
console.log("inserting into the customer ")

        const dbQuery = `INSERT INTO customer(name,email,phone) values($1,$2,$3);`
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const params: any = [name, email, phone]
        const customer = await db(dbQuery, params);
        console.log("Customer added", customer)

        revalidatePath("/customer")
        
    } catch (error) {
        console.log(error)
    }
    redirect('/customer')
}   





