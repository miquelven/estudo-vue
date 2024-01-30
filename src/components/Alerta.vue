<template>
  <div class="absolute right-0 top-10 w-40 max-h-32 p-4 rounded-md bg-blue-300">
    <div class="flex items-center">
      <p>Usuário adicionado</p>
      <span @click="$emit('close')" class="cursor-pointer font-bold text-2xl"
        >x</span
      >
    </div>
  </div>
</template>
