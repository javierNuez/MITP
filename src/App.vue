<script setup>
</script>

<template>
<div>
  <p>
    <router-link to="/home">Home</router-link> |
    <router-link to="/clientes">Clientes</router-link> |
    <router-link to="/turnos">Turnos</router-link> |
    <router-link to="/elActual">Actual</router-link>
  </p>
  <router-view></router-view>
</div>

  
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: rgb(55, 24, 231);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(239, 55%, 54%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
