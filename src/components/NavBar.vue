<script setup>
import { ref } from "vue";
import { useCargos } from "../store/cargos.js";
import { storeToRefs } from "pinia";

const pinia = useCargos();

const { totalCargos } = storeToRefs(pinia);

const menu = ref([
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Equipe", path: "/group" },
]);
</script>

<template>
  <nav class="bg-green-300 flex justify-between px-10">
    <span>Tutorial Vue</span>
    <strong>Total cargos: {{ totalCargos }}</strong>

    <ul class="flex gap-10">
      <li v-for="item in menu" :key="item.id">
        <router-link :to="item.path">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
