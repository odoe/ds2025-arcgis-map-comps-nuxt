<template>
  <calcite-list label="Power Plants" scale="l" selection-mode="single">
    <calcite-list-item
      v-for="item in items"
      :label="item"
      :value="item"
      @click="routeToPlant(item)"
    ></calcite-list-item>
  </calcite-list>
</template>

<script setup lang="ts">
import "@esri/calcite-components/components/calcite-list";
import "@esri/calcite-components/components/calcite-list-item";

const items = ref([]);
const requestUrl = useRequestURL();

const data = await fetch(`${requestUrl.href}api/plants`).then((res) =>
  res.json(),
);

items.value = data;

function routeToPlant(plant: string) {
  navigateTo({
    path: "map",
    query: { filter: plant },
  });
}
</script>
