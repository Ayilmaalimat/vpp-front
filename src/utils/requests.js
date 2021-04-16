import * as axios from 'axios'
const tokenGetter = (typeData='application/json')=>{
    if(localStorage.getItem('token_type')==='Bearer') {
        return { headers: {"Authorization" : `Bearer ${localStorage.getItem('access')}`},"Content-Type": typeData }
    }else {
        return {headers: {"Authorization": `Token ${localStorage.getItem('auth_token')}`},"Content-Type": typeData}
    }
}
const instance = axios.create({
    baseURL: 'http://192.168.31.45:8000/api/v1',

})


export const costsUpdateReq = (id,data)=>instance.post(`/costs/update/${id}`,data)
export const costGetByIdReq = (id)=>instance.get(`/costs/${id}`)

