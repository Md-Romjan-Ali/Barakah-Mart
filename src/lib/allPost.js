const serverUri=process.env.NEXT_PUBLIC_SERVER_URI

const postData=async(endPoint,data)=>{
const req=await fetch(`${serverUri}${endPoint}`,{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
})
return await req.json()
}

export const postProduct=async(data)=>{
return postData(`/api/addproduct`,data)
}