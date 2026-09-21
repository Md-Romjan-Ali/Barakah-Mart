
import { getDataByEmail } from '@/lib/allGet';
import { userSession } from '@/lib/session';
import React from 'react';
import MyProduct from './MyProduct';

const MyProductPage = async () => {

    const user = await userSession()
    const email = user?.email
    const myData = await getDataByEmail(email)
    return (
        <div className='bg-emerald-950 pt-25'>
            <div className=" border py-20 border-emerald-700/80 rounded-3xl p-6 sm:p-8 text-center space-y-3 max-w-3xl mx-auto shadow-2xl backdrop-blur-md mb-8">

                {/* Category / Badge */}
                <div>
                    <span className="text-[11px] font-bold tracking-wider uppercase bg-amber-500/10 text-amber-400 px-3.5 py-1 rounded-full border border-amber-400/30 inline-block">
                        Our Blessed Collection
                    </span>
                </div>

                {/* Main Title - Matches Modal Header Font Sizes */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                    Premium <span className="text-amber-400">Sunnah Essentials</span>
                </h2>

                {/* Description - Matches Modal Body Text */}
                <p className="text-emerald-200/80 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
                    Explore our carefully curated selection of pure, organic, and authentic Sunnah items crafted to bring health and barakah into your daily life.
                </p>

            </div>
            <MyProduct myData={myData} />
        </div>
    );
};

export default MyProductPage;