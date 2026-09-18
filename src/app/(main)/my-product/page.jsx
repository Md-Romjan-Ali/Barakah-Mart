import React from 'react';

const MyProductPage =async () => {
//    const { data: session } = await authClient.getSession()
    const myProduct=await getDataByPhone()
    return (
        <div>
            <h1 className='text-red-500 my-10'>and hare is jsut page</h1>
            this is my product
        </div>
    );
};

export default MyProductPage;