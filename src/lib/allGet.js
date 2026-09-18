const serverUri = process.env.NEXT_PUBLIC_SERVER_URI

const getData = async (endPoind) => {
    const res = await fetch(`${serverUri}${endPoind}`, {
        cache: 'no-store'
    })
    return await res.json()
}
// initial limit data
export const getProduct=async(limit)=>{
    return getData(`/api/getproduct?limit=${limit}`)
}
// order data
export const getOrderData=async()=>{
    return getData(`/api/getorderdata`)
}
