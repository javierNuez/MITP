import axios from 'axios'

const apiAfiliados = axios.create({
    baseURL: 'http://localhost:3001',
    headers:{
        Accept:'application/json',
        'Content-Type': 'application/json'
    }
})

export default{
    getAfiliados(){
        return apiAfiliados.get('/api/getlistaAfiliados')
    }
}