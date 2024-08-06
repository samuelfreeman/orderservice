"use client"
import type { Order } from "../types/type"
import { ColumnDef } from "@tanstack/react-table"



export const columns: ColumnDef<Order>[] = [
    {
        accessorKey: "product",
        header: "Product",
    },
    {
        accessorKey: "customer",
        header: "Customer",
    }, {
        accessorKey: "created_at",
        header: "CreatedAt",
    }


]
