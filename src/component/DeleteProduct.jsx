"use client"
import { deleteProduct } from '@/lib/allDelete';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaTrash } from 'react-icons/fa6';

const DeleteProducts = ({ id }) => {
    const router = useRouter()
    const deleteData = async () => {
        const deleteData = await deleteProduct(id)
        console.log(deleteData, 'from sel roduct');
        router.refresh()
    }
    return (
        <div>
            <button onClick={deleteData} className="text-red-400 cursor-pointer hover:text-red-500">
                <FaTrash size={22} />
            </button>
        </div>
    );
};

export default DeleteProducts;