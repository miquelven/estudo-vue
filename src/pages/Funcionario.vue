<script setup>
import { useRoute } from "vue-router";
import { useFetch } from "../composables/fetch";
import { useCargos } from "../store/cargos.js";
import { useLogin } from "../store/login";
import Users from "../components/Users.vue";
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";

const route = useRoute();
const id = route.params.id;
const store = useCargos();
const storeLogin = useLogin();

const { cores } = storeToRefs(store);

const cargoSelecionado = ref("");

const cargos = ["Gerencia", "Funcionario", "Operacional"];

watch(cargoSelecionado, (atual) => {
  const { id, first_name: nome } = pessoa.value;
  const funcionario = { id, nome, cargo: atual };
  store.adicionaCargo(funcionario);
});

const {
  data: pessoa,
  error,
  loading,
} = useFetch(`https://reqres.in/api/users?id=${id}`);
</script>

<template>
  <p v-if="loading">Carregando...</p>
  <p v-else-if="error">Erorr</p>
  <Users :user="pessoa" v-else />
  <select v-model="cargoSelecionado">
    <option disabled value="">Selecione o cargo</option>
    <option v-for="(cargo, index) in cargos" :key="index" :value="cargo">
      {{ cargo }}
    </option>
  </select>
  <div>
    <button @click="storeLogin.logarUsuario(pessoa.first_name)">logar</button>
  </div>
  <div>
    <button @click="store.getColors()">Buscar cores</button>
  </div>
</template>
