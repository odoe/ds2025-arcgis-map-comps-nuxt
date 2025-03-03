import { executeQueryJSON } from "@arcgis/core/rest/query.js";

const PLANT_URL =
  "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/PowerPlants_WorldResourcesInstitute/FeatureServer/0";

export default defineEventHandler(async () => {
  const query = {
    outFields: ["fuel1"],
    where: "1=1",
    returnDistinctValues: true,
    returnGeometry: false,
  };
  const results = await executeQueryJSON(PLANT_URL, query);
  const values = results.features
    .map((feature) => feature.attributes["fuel1"])
    .filter(Boolean)
    .sort();
  return values;
});
