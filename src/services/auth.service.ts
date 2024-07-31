import axios from 'axios'
const API_URL='http://localhost:3000/api'
export const signup=async(userData:any)=>{
    try{
        const response=await axios.post(`${API_URL}/intern`,userData)
        console.log('Response is',response)
        return response.data

    }
    catch(error:any){
        throw error
    }
}