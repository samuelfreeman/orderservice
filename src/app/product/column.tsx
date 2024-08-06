"use client"
import type { Product } from "../types/type"
import { ColumnDef } from "@tanstack/react-table"



export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    }, {
        accessorKey: "supplier",
        header: "Supplier",
    }


]
