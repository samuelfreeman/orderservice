import db from "../lib/db";

export async function getCustomers() {
    try {
        const dbQuery = `SELECT * FROM customer;`
        const customers = await db(dbQuery)
        console.log(customers)
        return customers;
    } catch (error) {
        console.log(error)
    }
}

export async function addCustomer() {
    try {
        const dbQuery = `INSERT INTO customer values($1,$2,$3)`
        const params: any = []
        const customer = await db(dbQuery, params);
        console.log("Customer added")
        return customer

    } catch (error) {
        console.log(error)
    }

}









