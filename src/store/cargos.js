import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCargos = defineStore("cargos", () => {
  const cargos = ref([]);
  const paletas = ref([]);

  const adicionaCargo = (funcionario) => {
    cargos.value = cargos.value.filter((c) => c.id !== funcionario.id);
    cargos.value.push(funcionario);
  };

  const removeCargo = (id) => {
    cargos.value = cargos.value.filter((c) => c.id !== id);
  };

  const getColors = async () => {
    const res = await fetch("https://reqres.in/api/unknown");
    const json = await res.json();
    console.log(json.data);
    paletas.value = json.data;
  };

  const totalCargos = computed(() => cargos.value.length);
  const cores = computed(() => paletas.value.map((c) => c.color));

  return {
    cargos,
    adicionaCargo,
    removeCargo,
    totalCargos,
    getColors,
    cores,
  };
});
