import Link from 'next/link';
import React from 'react';
import { FaLeaf } from 'react-icons/fa6';

const Logo = () => {
    return (
        <div>
             <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
                                <FaLeaf className="text-xl" />
                            </div>
                            <span className="font-extrabold text-2xl tracking-wide text-white">
                                Barakah <span className="text-amber-400">Mart</span>
                            </span>
                        </Link>
        </div>
    );
};

export default Logo;