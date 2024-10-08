import React from 'react'
import { getCustomers } from './action'
import { columns } from './column'
import { DataTable } from './data-table'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Bread from '@/components/Bread'
const page = async () => {
    const data = await getCustomers()
    return (
        <div className='p-20'>
            <Bread />
            <div>
                <Link href={"/customer/create"}>
                    <Button>Add</Button>
                </Link>
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default page
