<template>

    <div style="width:70%;margin:0 auto;">
        <h3>Turnos</h3>
		<table class="table"  border="1">
		<thead>
		<tr  class="table-primary">
			<th scope="col" style="text-align: center;">Afiliado</th>
			<th scope="col" style="text-align: center;">Nombre</th>
			<th scope="col" style="text-align: center;">Apellido</th>
			<th scope="col" style="text-align: center;">DNI</th>
			<th scope="col" style="text-align: center;">Médico Nombre</th>
			<th scope="col" style="text-align: center;">Médico Apellido</th>
			<th scope="col" style="text-align: center;">Especialidad</th>
			<th scope="col" style="text-align: center;">Fecha Turno</th>
			<th scope="col" style="text-align: center;">Hora Turno</th>
		</tr>
		</thead>
		
		<tbody>
		<tr v-for="conectarTurnos in listaT" :key="conectarTurnos.id_afiliado">
		<td>{{conectarTurnos.id_afiliado}}</td>
		<td>{{conectarTurnos.nombreA}}</td>
		<td>{{conectarTurnos.apellidoA}}</td>
		<td>{{conectarTurnos.dniA}}</td>
		<td>{{conectarTurnos.nombreM}}</td>
		<td>{{conectarTurnos.apellidoM}}</td>
		<td>{{conectarTurnos.especialidadM}}</td>
		<td>{{conectarTurnos.fecha}}</td>
		<td>{{conectarTurnos.hora}}</td>
		</tr>
		</tbody>
		</table>         
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
            Turno: { id_afiliado: 0, nombreA: '', apellidoA: '', dniA: 0 ,nombreM:'', apellidoM:'', especialidadM:'',fecha:'',hora:''},
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