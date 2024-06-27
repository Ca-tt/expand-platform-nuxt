<script setup lang="ts">
const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);

const searchInput = ref("some");
let searchData = ref("");

async function getSearchData() {
  try {
    searchData.value = await searchContent(searchInput);
  } catch (err) {
    searchData.value = err;
  }
}
</script>

<template>
  <NuxtLayout>
    <nav>
      <ContentNavigation v-slot="{ navigation }">
        <ul>
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </nav>

    <main>
      <input @input="getSearchData" v-model="searchInput" />

      <ul>
        <li v-for="link in searchData.value" :key="link.id">
          <NuxtLink v-if="link.id" :to="link.id">{{ link.id }}</NuxtLink>
        </li>

        <pre>{{ searchData }}</pre>
      </ul>
    </main>
    <NuxtPage />
  </NuxtLayout>

  <pre>{{ navigation }}</pre>
</template>

<style lang="scss" scoped></style>
