'use client'

import { useFormState } from 'react-dom';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { addCustomer } from '@/app/customer/action';






export default function Customer() {
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(addCustomer, initialState);
    

    return (
        <form action={dispatch}>
            <div className="rounded-md bg-gray-50 m-11 md:p-6">
                {/* Customer Name */}
                <label htmlFor="name" className="mb-5 block text-xl font-medium">
                    Add Customer
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
                        <label htmlFor="phoneNumber" className='mb-2 block text-sm font-medium'>Phone Number</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            className='bg-gray-200 w-[400px] h-[40px] rounded-md'
                            required
                        />
                    </div>



                    {/* Created At */}
                    <div>
                        <label htmlFor="email" className='mb-2 block text-sm font-medium'>Email </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className='bg-gray-200 w-[400px] h-[40px] rounded-md'
                            required
                        />
                    </div>
                </div>

                <div className="mt-6 mr-20 flex justify-end gap-4">
                    <Link
                        href="/customer"
                        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                        Cancel
                    </Link>
                    <Button type="submit">Create Customer</Button>
                </div>
            </div>
        </form>
    );
}