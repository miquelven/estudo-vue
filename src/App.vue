<script setup>
import Layout from "./components/Layout.vue";
import Cabeçalho from "./components/Cabeçalho.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <Layout>
    <template v-slot:header>
      <NavBar />
      <Cabeçalho>
        <template v-slot="{ message, funcao }">
          <p>Mensagem: {{ message }}</p>
          <button @click="funcao">ALERTA</button>
        </template>
      </Cabeçalho>
    </template>
    <router-view></router-view>
    <template v-slot:footer>
      <h1>footer</h1>
    </template>
  </Layout>
</template>
