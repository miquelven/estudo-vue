<script setup>
import { ref } from "vue";

import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const mode = ref(isDark);
</script>

<template>
  <header>
    <slot name="header"></slot>
    <button @click="toggleDark()">
      {{ isDark == true ? "light" : "dark" }}
    </button>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template>

<style>
html.dark {
  background: #000;
  color: white;
}
</style>
