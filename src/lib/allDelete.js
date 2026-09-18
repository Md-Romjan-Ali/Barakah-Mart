const serverUri = process.env.NEXT_PUBLIC_SERVER_URI

const deleteproductById=async(endpoint)=>{
    const res=await fetch(`${serverUri}${endpoint}`,{
        method:'DELETE',
    })
    return await res.json()

}

export const deleteProduct=async (id)=>{
    return deleteproductById(`/api/deleteproduct/${id}`)
}