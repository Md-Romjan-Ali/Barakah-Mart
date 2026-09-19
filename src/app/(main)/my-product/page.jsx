
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyProductPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    console.log(session?.user);
    return (
        <div>
            <h1 className='text-red-500 my-10'>and hare is jsut page</h1>
            this is my product
        </div>
    );
};

export default MyProductPage;