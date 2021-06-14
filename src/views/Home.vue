<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col xl="4" lg="4" md="4" sm="12" xs="12">
          <v-card @click="showElementsList('people', $store.getters.getAllPeople)">
            <v-img
              src=".././assets/people.jpg"
              class="white--text align-end card-image"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title class="card-title">PEOPLE</v-card-title>
            </v-img>
          </v-card>
        </v-col>
        <v-col xl="4" lg="4" md="4" sm="12" xs="12">
          <v-card @click="showElementsList('planets', $store.getters.getAllPlanets)">
            <v-img
              src=".././assets/planet.jpg"
              class="white--text align-end card-image"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title class="card-title">PLANETS</v-card-title>
            </v-img>
          </v-card>
        </v-col>
        <v-col xl="4" lg="4" md="4" sm="12" xs="12">
          <v-card @click="showElementsList('starships', $store.getters.getAllStarships)">
            <v-img
              src=".././assets/starship.jpg"
              class="white--text align-end card-image"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title class="card-title">STARSHIPS</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    showElementsList(option, items) {
      this.$router.push({
        name: "List",
        params: {
          option: option,
          items: items
        },
      });
    },
  },
};
</script>

<style lang="scss">
.card-title {
  float: right;
  color: white;
  font-family: "Copperplate", fantasy;
  font-size: 200%;
}
.card-image {
  height: 250px;
}
</style>
