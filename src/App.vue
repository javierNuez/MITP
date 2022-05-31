<script setup>
//import bootstrap from bootstrap
</script>

<template>
<div>
  <p>
    <router-link to="/home">Home</router-link> |
    <router-link to="/afiliados">Afiliados</router-link> |
    <router-link to="/turnos">Turnos</router-link> |
    <router-link to="/usuarioActual">Usuario Actual</router-link>
  </p>
  <router-view></router-view>
</div>

  
</template>