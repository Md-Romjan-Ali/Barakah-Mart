"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaBasketShopping } from 'react-icons/fa6';
import { authClient } from '@/lib/auth-client';
import { getDataByEmail } from '@/lib/allGet';

const ProductLength = () => {
    const { data: session } = authClient.useSession();
    const [productCount, setProductCount] = useState(0);

    useEffect(() => {
        const email = session?.user?.email;

        if (!email) {
            setProductCount(0);
            return;
        }

        let isMounted = true;

        getDataByEmail(email)
            .then((products) => {
                if (!isMounted) return;
                setProductCount(Array.isArray(products) ? products.length : 0);
            })
            .catch(() => {
                if (isMounted) setProductCount(0);
            });

        return () => {
            isMounted = false;
        };
    }, [session?.user?.email]);

    return (
        <div className=''>
            <Link
                href={'/my-product'}
                className="relative p-2.5 bg-emerald-900/60 hover:bg-emerald-800/80 text-amber-400 rounded-xl border border-emerald-700/50 transition-all"
            >
                <FaBasketShopping className="text-xl" />
                <span className="absolute top-2 -right-4 bg-amber-500 text-emerald-950 font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {productCount}
                </span>
            </Link>
        </div>
    );
};

export default ProductLength;