import { getDataByEmail } from '@/lib/allGet';
import { authClient } from '@/lib/auth-client';
import { userSession } from '@/lib/session';
import Link from 'next/link';
import React from 'react';
import { FaBasketShopping } from 'react-icons/fa6';

const ProductLength = async () => {
    // const user = await userSession()
    // const email = user?.email
    const { data: session } = await authClient.getSession()
    const email=session?.user.email
    console.log(email,'from product langht page');
    const myProducts = await getDataByEmail(email)
    return (
        <div>
            {/* Cart Icon Button */}
            <Link href={'/my-product'}
                className="relative p-2.5 bg-emerald-900/60 hover:bg-emerald-800/80 text-amber-400 rounded-xl border border-emerald-700/50 transition-all"
            >
                <FaBasketShopping className="text-xl" />
                <span className="absolute -top-1 -right-1 bg-amber-500 text-emerald-950 font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {myProducts.length}
                </span>
            </Link>
        </div>
    );
};

export default ProductLength;