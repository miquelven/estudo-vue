<script setup>
import { useCargos } from "../store/cargos.js";
import { storeToRefs } from "pinia";

const pinia = useCargos();

const { cargos, cores } = storeToRefs(pinia);

const remover = (id) => {
  pinia.removeCargo(id);
};
</script>

<template>
  <h1>Equipe</h1>
  <div class="flex gap-4" v-for="(cargo, index) in cargos" :key="index">
    <p>{{ cargo.nome }} - {{ cargo.cargo }}</p>
    <button @click="remover(cargo.id)">Remover</button>
  </div>
  <div v-for="(cor, index) in cores" :key="index">
    {{ cor }}
  </div>
</template>
