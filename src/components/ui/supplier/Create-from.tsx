'use client'

import { useFormState } from 'react-dom';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { addSupplier } from '@/app/supplier/action';






export default function Supplier() {
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(addSupplier, initialState);


    return (
        <form action={dispatch}>
            <div className="rounded-md bg-gray-50 m-11 md:p-6">
                {/* Customer Name */}
                <label htmlFor="name" className="mb-5 block text-xl font-medium">
                    Add Supplier
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