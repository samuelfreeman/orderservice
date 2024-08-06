"use client"
import type { Supplier } from "../types/type"
import { ColumnDef } from "@tanstack/react-table"



export const columns: ColumnDef<Supplier>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },

]
