'use client'

import { useFormState } from 'react-dom';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { addProduct } from '@/app/product/action';
import { Supplier } from '@/app/types/type';






export default function Product({ suppliers }: { suppliers: any }) {
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(addProduct, initialState);


    return (
        <form action={dispatch}>
            <div className="rounded-md bg-gray-50 m-11 md:p-6">
                {/* Customer Name */}
                <label htmlFor="name" className="mb-5 block text-xl font-medium">
                    Add Product
                </label>
                <div className="mb-4 grid grid-cols-2 gap-x-14">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className='mb-2 block text-sm font-medium'>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className='bg-gray-200 w-[400px] h-[40px] rounded-md'
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label htmlFor="phoneNumber" className='mb-2 block text-sm font-medium'>Amount</label>
                        <input
                            type="number"
                            step={"0.01"}
                            id="amount"
                            name="amount"
                            className='bg-gray-200 w-[400px] h-[40px] rounded-md'
                            required
                        />
                    </div>
                    <div className='flex flex-col w-52 p-4 gap-2'>

                        <label htmlFor="supplier">Supplier</label>
                        <select name="supplier" id="" className='py-3 rounded-md' >

                            {suppliers.map((suppliers: any) => {
                                return (
                                    <option value={suppliers.id} key={suppliers.id} >{suppliers.name}</option>
                                )
                            })}

                        </select>
                    </div>


                </div>

                <div className="mt-6 mr-20 flex justify-end gap-4">
                    <Link
                        href="/product"
                        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                        Cancel
                    </Link>
                    <Button type="submit">Create Product</Button>
                </div>
            </div>
        </form>
    );
}