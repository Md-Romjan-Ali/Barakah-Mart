import { getOrderData } from '@/lib/allGet';
import Image from 'next/image';
import React from 'react';
import { FaBoxesPacking, FaLocationDot, FaPhone, FaTrash, FaUser } from 'react-icons/fa6';

const SellProduct = async () => {
    const orderData = await getOrderData()
    console.log(orderData, 'from sell ');
    const deleteProduct=()=>{
      
    }
    return (
      <div className="w-full bg-emerald-950 text-white py-8 px-4 sm:px-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Table Header / Title */}
        <div className="flex items-center justify-between border-b border-emerald-800/80 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <FaBoxesPacking className="text-lg" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Customer <span className="text-amber-400">Orders</span>
              </h2>
              <p className="text-emerald-200/70 text-xs">
                Manage and view customer purchase requests
              </p>
            </div>
          </div>

          <span className="text-xs bg-emerald-900 border border-emerald-700/80 px-3 py-1.5 rounded-full text-emerald-300 font-semibold">
            Total: <strong className="text-amber-400">{orderData.length}</strong>
          </span>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="bg-emerald-900/40 border border-emerald-700/60 rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-emerald-700">
            <table className="w-full text-left border-collapse min-w-[700px]">
              
              {/* Table Head */}
              <thead>
                <tr className="bg-emerald-950/80 border-b border-emerald-800/80 text-amber-400 text-xs uppercase tracking-wider">
                  <th className="py-4 px-5 font-bold">Product</th>
                  <th className="py-4 px-5 font-bold">Customer</th>
                  <th className="py-4 px-5 font-bold">Contact</th>
                  <th className="py-4 px-5 font-bold">Address</th>
                  <th className="py-4 px-5 font-bold text-center">Order ID</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-emerald-800/50 text-xs sm:text-sm text-emerald-100">
                {orderData.map((item) => (
                  <tr
                    key={item._id}
                    className="hover:bg-emerald-800/30 transition-colors duration-150"
                  >
                    {/* Product & Image */}
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-emerald-950 border border-emerald-700/80 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.product || item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="font-semibold text-white line-clamp-2 max-w-[200px]">
                          {item.product}
                        </span>
                      </div>
                    </td>

                    {/* Customer Name */}
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-2 font-medium text-white">
                        <FaUser className="text-emerald-400 text-xs flex-shrink-0" />
                        <span>{item.name}</span>
                      </div>
                    </td>

                    {/* Phone Number */}
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-2 font-mono text-emerald-200">
                        <FaPhone className="text-amber-400 text-xs flex-shrink-0" />
                        <span>{item.phone}</span>
                      </div>
                    </td>

                    {/* Address */}
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-2 text-emerald-200/90 max-w-[220px]">
                        <FaLocationDot className="text-emerald-400 text-xs flex-shrink-0" />
                        <span className="truncate">{item.address}</span>
                      </div>
                    </td>

                    {/* Shortened ID Badge */}
                    <td className="py-4 px-5 text-center">
                      <button onClick={deleteProduct} className="text-red-400 cursor-pointer hover:text-red-500">
                        <FaTrash size={22}/>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </div>
    );
};

export default SellProduct;