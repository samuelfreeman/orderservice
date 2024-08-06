import db from "../lib/db";
import type { Product } from "../types/type";
import { revalidatePath, unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";
export async function getProducts(): Promise<Product[]> {
    try {
        const dbQuery = `
        SELECT 
          product.id,
          product.amount,
          product.name,
          supplier.name AS supplier 
        FROM product  
        JOIN supplier ON product.supplier_id = supplier.id
      `
        const product = await db(dbQuery)
        console.log(product)
        const products: Product[] = product as Product[]
        return products;
    } catch (error) {
        console.log(error)
        return []
    }
}

export type State = {
    errors?: {
        name?: string[]
        amount?: string[]
        supplier_id?: string[]
        created_at?: string[]
    }
}

export async function addProduct(payload: State, formData: FormData): Promise<State> {

    try {
        const dbQuery = `INSERT INTO product(name,amount,supplier_id) values($1,$2,$3)`
        const name = formData.get('name') as string;
        const amount = formData.get('amount') as string;
        const supplier_id = formData.get('supplier') as string;


        const params: any = [name, amount, supplier_id]
        const product = await db(dbQuery, params);
        console.log("product added", product)
        revalidatePath("/product")
    } catch (error) {
        console.log(error)
    }
    redirect('/product')
}





