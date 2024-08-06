"use client"
import type { Customer } from "../types/type"
import { ColumnDef } from "@tanstack/react-table"



export const columns: ColumnDef<Customer>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
]
