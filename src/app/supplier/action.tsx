import db from "../lib/db";
import type { Supplier } from "../types/type";


import { revalidatePath, unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";
export async function getsupplier(): Promise<Supplier[]> {
    unstable_noStore()
    try {
        const dbQuery = `SELECT * FROM supplier;`
        const supplier = await db(dbQuery)
        console.log(supplier)
        const suppliers: Supplier[] = supplier as Supplier[]
        return suppliers;
    } catch (error) {
        console.log(error)
        return []
    }
}

export type State = {
    errors?: {
        name?: string[]
        created_at?: string[]
    }
}

export async function addSupplier(payload: State, formData: FormData): Promise<State> {
    
    try {
        const dbQuery = `INSERT INTO supplier(name) values($1);`
        const name = formData.get('name') as string;


        const params: any = [name]
        const supplier = await db(dbQuery, params);
        console.log("Supplier added", supplier)
        revalidatePath("/supplier")
    } catch (error) {
        console.log(error)
    }
    redirect('/supplier')
}





