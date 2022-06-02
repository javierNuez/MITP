<template>
    <div>
        <h3>Turnos</h3>
        <li v-for="conectarTurnos in listaT" :key="conectarTurnos.id_afiliado">
         
        {{conectarTurnos.id_afiliado}} {{conectarTurnos.nombreA}} 
        {{conectarTurnos.apellidoA}} {{conectarTurnos.dniA}}
		{{conectarTurnos.nombreM}} {{conectarTurnos.apellidoM}}
		{{conectarTurnos.especialidadM}}
		</li>
        {{mensajeError}}
        <button @click="traerDatos">Traer datos</button>
    </div>
</template>
<script>
import conectarTurnos, {} from '../services/conectarTurnos.js'
export default {
    data() {
        return {
            listaT:[],
            Turno: { id_afiliado: 0, nombreA: '', apellidoA: '', dniA: 0 ,nombreM:'', apellidoM:'', especialidadM:''},
            mensajeError: ''
        }
        
    },
    methods:{
        async traerDatos(){
            try{
              const rta= await conectarTurnos.getTurnos();
            this.listaT = rta.data;  
            }catch( error){
                console.log(error);
                this.mensajeError = "Se produjo un error con la conexión"
            }
            
        }
    }
}
</script>