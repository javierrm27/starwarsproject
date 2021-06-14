<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <v-card class="mx-auto">
          <v-card-text>
            <h1 v-text="objToShow.name" class="objTitle"></h1>
            <p class="text--primary attr"><b>{{ attrTitles.attr1 }}</b>{{ objToShow.attr1 }}</p>
            <p class="text--primary attr"><b>{{ attrTitles.attr2 }}</b>{{ objToShow.attr2 }}</p>
            <p class="text--primary attr"><b>{{ attrTitles.attr3 }}</b>{{ objToShow.attr3 }}</p>
            <p class="text--primary attr"><b>{{ attrTitles.attr4 }}</b>{{ objToShow.attr4 }}</p>
            <p class="text--primary attr"><b>{{ attrTitles.attr5 }}</b>{{ objToShow.attr5 }}</p>
          </v-card-text>
          <v-card-actions> </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Detail",
  props: ["element", "type"],
  data() {
    return {
      item: {},
      objToShow: {},
      attrTitles: {},
    };
  },
  async beforeMount() {
    let selectedType = "";
    if (this.type) {
      selectedType = this.type;
      localStorage["type"] = JSON.stringify(this.type);
    } else {
      selectedType = localStorage["type"]
        ? JSON.parse(localStorage["type"])
        : "";
    }
    if (this.element) {
      this.item = this.element;
      localStorage["item"] = JSON.stringify(this.item);
    } else {
      this.item = localStorage["item"] ? JSON.parse(localStorage["item"]) : {};
    }
    switch (selectedType) {
      case "people":
        this.objToShow.name = this.item.name.toUpperCase();
        this.attrTitles.attr1 = "BIRTH YEAR: ";
        this.objToShow.attr1 = this.item.birth_year.toUpperCase();
        this.attrTitles.attr2 = "GENDER: ";
        this.objToShow.attr2 = this.item.gender.toUpperCase();
        this.attrTitles.attr3 = "HEIGHT: ";
        this.objToShow.attr3 = this.item.height.toUpperCase();
        this.attrTitles.attr4 = "SKIN COLOR: ";
        this.objToShow.attr4 = this.item.skin_color.toUpperCase();
        this.attrTitles.attr5 = "EYE COLOR: ";
        this.objToShow.attr5 = this.item.eye_color.toUpperCase();
        break;
      case "planets":
        this.objToShow.name = this.item.name.toUpperCase();
        this.attrTitles.attr1 = "TERRAIN: ";
        this.objToShow.attr1 = this.item.terrain.toUpperCase();
        this.attrTitles.attr2 = "DIAMETER: ";
        this.objToShow.attr2 = this.item.diameter.toUpperCase();
        this.attrTitles.attr3 = "GRAVITY: ";
        this.objToShow.attr3 = this.item.gravity.toUpperCase();
        this.attrTitles.attr4 = "POPULATION: ";
        this.objToShow.attr4 = this.item.population.toUpperCase();
        this.attrTitles.attr5 = "SURFACE WATER: ";
        this.objToShow.attr5 = isNaN(this.item.surface_water) ? this.item.surface_water.toUpperCase() : this.item.surface_water; 
        break;
      case "starships":
        this.objToShow.name = this.item.name.toUpperCase();
        this.attrTitles.attr1 = "MODEL: ";
        this.objToShow.attr1 = this.item.model.toUpperCase();
        this.attrTitles.attr2 = "CREW: ";
        this.objToShow.attr2 = this.item.crew.toUpperCase();
        this.attrTitles.attr3 = "ATMOSPHERING SPEED: ";
        this.objToShow.attr3 = this.item.max_atmosphering_speed.toUpperCase();
        this.attrTitles.attr4 = "MANUFACTURER: ";
        this.objToShow.attr4 = this.item.manufacturer.toUpperCase();
        this.attrTitles.attr5 = "COST: ";
        this.objToShow.attr5 = `${this.item.cost_in_credits.toUpperCase()} CREDITS`;
        break;
    }
  },
};
</script>

<style lang="scss">
.attr {
  margin: 1%;
}
.objTitle {
  margin-top: 3%;
  margin-bottom: 3%;
}
</style>
