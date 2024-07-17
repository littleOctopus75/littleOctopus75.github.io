import type{ GIFResponse } from "../interfaces/gif.response"
import { giphyAPi } from "./10-axios"

export const getImage= async()=>{
    try{
    const resp= await giphyAPi.get<GIFResponse>('/random')
    return resp.data.data.images.downsized_large.url
    }catch(error){
        throw 'URL no encontrada'
    }

}

// console.log(getImage())
getImage().then((url) => console.log({url}))
.catch(error => console.log(error))