import React from 'react'
import { getCustomers } from './action'
const page = async () => {
    await getCustomers()
    return (
        <div>
            <h1>Customers Page.</h1>
        </div>
    )
}

export default page
