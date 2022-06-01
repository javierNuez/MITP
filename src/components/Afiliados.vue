<template>
    <div>
        <h3>Afiliados</h3>
        {{lista}}
        <button @click="traerDatos">Traer datos</button>
    </div>
</template>
<script>
import conectarAfiliados, {} from '../services/conectarAfiliados.js'
export default {
    data() {
        return {
            lista:[],
            afiliado: { id_paciente: 0, nombre: '', apellido: '', dni: 0 }
        }
        
    },
    methods:{
        async traerDatos(){
            const rta= await conectarAfiliados.getAfiliados();
            console.log(rta.data);
        }
    }
}
</script>
