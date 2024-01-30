import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useStorage } from "@vueuse/core";

export const useLogin = defineStore("login", () => {
  const usuarioLogado = ref("");

  const logarUsuario = (userName) => {
    usuarioLogado.value = userName;
    useStorage("usuarioLogado", userName);
  };

  const logado = computed(() => usuarioLogado.value.length);

  return {
    usuarioLogado,
    logarUsuario,
    logado,
  };
});
