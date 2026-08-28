const serverUri = process.env.NEXT_PUBLIC_SERVER_URI

const getData = async (endPoind) => {
    const res = await fetch(`${serverUri}${endPoind}`, {
        cache: 'no-store'
    })
    return await res.json()
}

export const getProduct=async()=>{
    return getData(`/api/getproduct`)
}