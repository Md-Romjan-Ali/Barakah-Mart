import { getProduct } from '@/lib/allGet';
import React from 'react';

const AllProduct = async () => {
    const data = await getProduct()
    console.log(data, 'from all produc page');
    return (
        <div>
            this is all product
        </div>
    );
};

export default AllProduct;