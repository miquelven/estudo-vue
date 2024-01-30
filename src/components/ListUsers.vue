<script setup>
import Users from "./Users.vue";
import Alerta from "./Alerta.vue";
import { onMounted, ref, computed, watchEffect, provide } from "vue";
import { useFetch } from "../composables/fetch.js";
import { useRouter } from "vue-router";

const totalCargos = ref(0);

const {
  data: pessoas,
  error,
  loading,
} = useFetch("https://reqres.in/api/users?page=2");

const selected = ref(false);

// const pessoas = ref([]);
const idSelecao = ref([]);
// const pessoasFiltered = ref([]);
const warning = ref("Mensagem - Aviso");
const usersSelection = (id) => {
  if (idSelection(id)) {
    idSelecao.value = idSelecao.value.filter((pessoaId) => pessoaId !== id);
    return;
  }
  selected.value = true;

  idSelecao.value.push(id);
};

const idSelection = (id) => {
  return idSelecao.value.includes(id);
};

const pessoasFiltered = computed(() => {
  if (!pessoas.value) return [];
  const pessoasFilter = pessoas.value.filter((c) => idSelection(c.id));
  return pessoasFilter;
});

provide("warning", warning);

const routerPush = useRouter();
function showMoreUser(id) {
  routerPush.push(`/funcionario/${id}`);
}
</script>

<template>
  <div class="flex gap-20 flex-wrap">
    <p v-for="(pessoa, index) in pessoasFiltered" :key="index" v-if="pessoas">
      {{ pessoa.first_name }}
    </p>
    <p v-if="loading">Carregando...</p>
    <div v-for="pessoa in pessoas" v-if="!error" :key="pessoa.id">
      <button
        @click="showMoreUser(pessoa.id)"
        class="bg-blue-300 cursor-pointer"
      >
        Ver Mais
      </button>
      <Users
        @selection="usersSelection"
        :user="pessoa"
        :selected="idSelection(pessoa.id)"
      />
    </div>
    <p v-else>{{ error }}</p>

    <Teleport to="#alerta" v-if="selected">
      <Alerta @close="() => (selected = false)" />
    </Teleport>
  </div>
</template>
