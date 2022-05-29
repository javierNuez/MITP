<template>
    <div>
        <h2>Usuario actu88alww</h2>
        <h1>Id:{{ listaUsuarios}}</h1>
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
};
</script>
