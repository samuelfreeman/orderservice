'use client'

import { useFormState } from 'react-dom';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { addOrder } from '@/app/order/action';






export default function Order({ customers, products }: { customers: any, products: any }) {
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(addOrder, initialState);


    return (
        <form action={dispatch}>
            <div className="rounded-md bg-gray-50 m-11 md:p-6">
                {/* Customer Name */}
                <label htmlFor="name" className="mb-5 block text-xl font-medium">
                    Add Order
                </label>
                <div className='flex flex-col w-52 p-4 gap-2'>

                    <label htmlFor="customer">Customer</label>
                    <select name="customerID" id="" className='py-3 rounded-md' >

                        {customers.map((customers: any) => {
                            return (
                                <option value={customers.id} key={customers.id} >{customers.name}</option>
                            )
                        })}

                    </select>





                    <div className='flex flex-col w-52 p-4 gap-2'>

                        <label htmlFor="product">Product</label>
                        <select name="productID" id="" className='py-3 rounded-md' >

                            {products.map((products: any) => {
                                return (
                                    <option value={products.id} key={products.id} >{products.name}</option>
                                )
                            })}

                        </select>
                    </div>

                </div>

                <div className="mt-6 mr-20 flex justify-end gap-4">
                    <Link
                        href="/order"
                        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                        Cancel
                    </Link>
                    <Button type="submit">Create Order</Button>
                </div>
            </div>
        </form>
    );
}