<template>
    <div>
        <h2>Usuario actu88alww</h2>
        <h1>{{ listaUsuarios}}</h1>
        <button @click="agregar">Agregar Usuario</button>
    </div>
</template>
<script>
import { useStore} from '../stores/storeUsuarios.js';
import { storeToRefs } from 'pinia'

export default {
    setup(){
    const store = useStore();
    const { listaUsuarios } = storeToRefs(store)
    return {
        store, listaUsuarios
        };
    },
    methods: {
        agregar(){
            
            this.store.agregarUsuario();
        }
    }
};
</script>
