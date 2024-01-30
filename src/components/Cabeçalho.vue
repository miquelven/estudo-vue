<script setup>
import { useLogin } from "../store/login.js";
import { storeToRefs } from "pinia";

const pinia = useLogin();

const { usuarioLogado, logado } = storeToRefs(pinia);

const message = "Olá";
const alerta = () => {
  alert("message");
};
</script>

<template>
  <h1 v-if="logado">
    Bem-vindo: <strong>{{ usuarioLogado }}</strong>
  </h1>
  <slot :message="message" :funcao="alerta"> </slot>
</template>

<style scoped></style>
