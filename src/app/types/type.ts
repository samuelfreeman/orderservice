export type Customer = {
    id: string
    name: string
    email: string
    phone: string
    created_at: string
}

export type CustomersList = Customer[]
export type Supplier = {
    id: string
    name: string
    created_at: string

}

export type SuppliersList = Supplier[]

export type Product = {
    id: string
    name: string
    amount: string
    price: number
    supplier_id: string
    created_at: string
    // order_items: OrderItem[]
}

export type ProductsList = Product[]

export type OrderItem = {
    id: string
    order_id: string
    product_id: string
    quantity: number
    created_at: string
}

export type OrderItemList = OrderItem[]

export type Order = {
    id: string
    product: string
    customer: string
    created_at: string
    // order_items: OrderItem[]
    // customer  : Customer[]
}

export type OrdersList = Order[]