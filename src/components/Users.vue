<script setup>
import { ref, computed, watchEffect, inject } from "vue";

// const pessoas = ref([]);
const disableButton = ref(true);
const code = ref(1);

const warning = inject("warning");

defineEmits(["selection"]);

defineProps({
  user: Object,
  selected: Boolean,
});

// const fullName = computed(() => {
//   return `${pessoa.value["first_name"]} ${pessoa.value["last_name"]}`;
// });

const codeInput = computed(() =>
  code.value == 0 ? (disableButton.value = true) : (disableButton.value = false)
);

// const getNewUser = async () => {
//   const req = await fetch(`https://reqres.in/api/users/${code.value}`);
//   const json = await req.json();
//   pessoa.value = json.data;
// };

// watchEffect(() => {
//   getNewUser();
// });
</script>

<template>
  <!-- <input v-model="code" type="number" placeholder="código do user" /> -->
  <!-- <button @click="getNewUser" :disabled="codeInput">Buscar</button> -->

  <div class="flex gap-2 flex-col max-w-[100px]">
    <h3 class="text-red-400" v-if="user.first_name === 'George'">Gerente</h3>
    <h3 class="text-blue-400" v-else-if="user.first_name === 'Rachel'">
      Assistente
    </h3>
    <h3 class="text-green-400" v-else>Funcionário</h3>
    <img v-bind:src="user.avatar" alt="imagem do usuario" />
    <h2>{{ user.first_name }} {{ user.last_name }}</h2>
    <p v-email="user.email"></p>
    <strong>{{ warning }}</strong>
    <button @click="() => $emit('selection', user.id)" class="bg-green-300">
      {{ !selected ? "Selecionar" : "Desmarcar" }}
    </button>
  </div>
</template>
