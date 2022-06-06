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
    },
    addAfiliados(conectarAfiliados){
        return apiAfiliados.post('api/setafiliados', conectarAfiliados)
    },
    deleteAfiliados(id_afiliado){
        return apiAfiliados.delete('api/borrarAfiliado/'+ id_afiliado)
    }
}
