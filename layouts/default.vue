<script setup lang="ts"></script>

<template>
  <section class="bg-red">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.bg-red {
  background: red;
}
</style>
