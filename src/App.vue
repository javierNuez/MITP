<script setup>
//import bootstrap from bootstrap
</script>

<template>
<div>
  <p>
    <router-link to="/loguin">Loguin</router-link> |
    <router-link to="/home">Home</router-link> |
    <router-link to="/afiliados">Afiliados</router-link> |
    <router-link to="/medicos">Medicos</router-link> |
    <router-link to="/turnos">Turnos</router-link> |
    <router-link to="/RegistrarTurno">Registrar Turno</router-link>
    <!--<router-link to="/usuarioActual">Usuario Actual</router-link> |
    |
    <router-link to="/RegistrarAfiliado">Registrar Afiliado</router-link>|
    <router-link to="/EliminarTurno">Eliminar Turno</router-link>-->

  </p>
  <router-view></router-view>
</div>
</template>