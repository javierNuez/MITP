<template>
    <div>
        <h3>Afiliados</h3>
        <li v-for="conectarAfiliado in lista" :key="conectarAfiliado.id_paciente">
         
        {{conectarAfiliado.id_paciente}} {{conectarAfiliado.nombre}} 
        {{conectarAfiliado.apellido}} {{conectarAfiliado.dni}}</li>
        {{mensajeError}}
        <button @click="traerDatos">Traer datos</button>
    </div>
</template>
<script>
import conectarAfiliados, {} from '../services/conectarAfiliados.js'
export default {
    data() {
        return {
            lista:[],
            afiliado: { id_paciente: 0, nombre: '', apellido: '', dni: 0 },
            mensajeError: ''
        }
        
    },
    methods:{
        async traerDatos(){
            try{
              const rta= await conectarAfiliados.getAfiliados();
            this.lista = rta.data;  
            }catch( error){
                console.log(error);
                this.mensajeError = "Se produjo un error con la conexión"
            }
            
        }
    }
}
</script>
