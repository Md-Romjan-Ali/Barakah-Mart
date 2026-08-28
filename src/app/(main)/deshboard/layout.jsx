import Link from 'next/link';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className='min-h-screen bg-emerald-950 px-4 pb-12 pt-28 text-white sm:px-6'>
            <div className='mx-auto flex max-w-7xl flex-col gap-6 md:flex-row'>
                <aside className='w-full shrink-0 rounded-2xl border border-emerald-800 bg-emerald-900/60 p-4 md:w-56 min-h-screen'>
                    <p className='mb-3 text-xs font-semibold uppercase tracking-wide text-emerald-300'>Dashboard</p>
                    <nav aria-label='Dashboard navigation'>
                        <ul className='space-y-2'>
                            <li><Link className='block rounded-lg px-3 py-2 text-sm text-emerald-100 hover:bg-emerald-800 hover:text-amber-400' href='/deshboard'>Overview</Link></li>
                            <li><Link className='block rounded-lg px-3 py-2 text-sm text-emerald-100 hover:bg-emerald-800 hover:text-amber-400' href='/deshboard/add-product'>Add Product</Link></li>
                            <li><Link className='block rounded-lg px-3 py-2 text-sm text-emerald-100 hover:bg-emerald-800 hover:text-amber-400' href='/deshboard/sell-product'>Sell Product</Link></li>
                        </ul>
                    </nav>
                </aside>
                <main className='min-w-0 flex-1'>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;