import { ref, onBeforeMount } from "vue";

const data = ref(0);
const error = ref("");
const loading = ref(true);

export function useFetch(url) {
  const getUsers = async () => {
    try {
      const req = await fetch(url);
      const json = await req.json();
      data.value = json.data;
    } catch (err) {
      error.value = "Error ao buscar na api";
    } finally {
      loading.value = false;
    }
  };

  onBeforeMount(async () => {
    await getUsers();
  });

  return {
    data,
    error,
    loading,
  };
}
