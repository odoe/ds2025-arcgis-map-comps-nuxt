<template>
  <calcite-shell content-behind class="calcite-mode-light">
    <calcite-navigation slot="header">
      <calcite-navigation-logo
        heading="Power Plants"
        heading-level="1"
        slot="logo"
      >
      </calcite-navigation-logo>
      <calcite-menu slot="content-end" v-if="!isHome">
        <calcite-menu-item
          icon-start="home"
          text-enabled
          @click="navigateTo({ path: '/' })"
        ></calcite-menu-item>
      </calcite-menu>
    </calcite-navigation>
    <slot></slot>
  </calcite-shell>
</template>
<script setup lang="ts">
import "@esri/calcite-components/dist/calcite/calcite.css";
import "@esri/calcite-components/components/calcite-shell";
import "@esri/calcite-components/components/calcite-navigation";
import "@esri/calcite-components/components/calcite-navigation-logo";
import "@esri/calcite-components/components/calcite-menu";
import "@esri/calcite-components/components/calcite-menu-item";

const isHome = ref(true);
const route = useRoute();

watch(
  () => route.path,
  () => {
    isHome.value = route.path === "/";
  },
);
</script>
