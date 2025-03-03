<template>
  <calcite-loader v-if="!arcgisViewReady"></calcite-loader>
  <arcgis-map
    basemap="gray-vector"
    @arcgisViewReadyChange="arcgisViewReadyChangeHandler"
  >
    <arcgis-expand position="bottom-left">
      <arcgis-legend respect-layer-definition-expression></arcgis-legend>
    </arcgis-expand>
  </arcgis-map>
</template>

<style lang="css" scoped>
calcite-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<script setup lang="ts">
import "@arcgis/core/assets/esri/themes/light/main.css";
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-expand";
import "@arcgis/map-components/components/arcgis-legend";
import "@esri/calcite-components/components/calcite-loader";

import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";

const filter = useRoute().query.filter;
const arcgisViewReady = ref(false);

function arcgisViewReadyChangeHandler(
  event: HTMLArcgisMapElement["arcgisViewReadyChange"],
) {
  const element = event.target;
  const layer = new FeatureLayer({
    portalItem: {
      id: "a453b9a8ccae4c178ae28621c62307bf",
    },
  });

  if (filter) {
    layer.definitionExpression = `fuel1 = '${filter}'`;
  }

  element.map.layers.add(layer);

  layer.when(() => {
    element.extent = layer.fullExtent!;
    arcgisViewReady.value = true;
  });
}
</script>
