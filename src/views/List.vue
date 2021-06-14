<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field label="Search" clearable v-model="filterText"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
          <v-card class="mx-auto" tile>
        <v-list>
          <v-subheader v-text="this.title"></v-subheader>
          <v-list-item-group color="primary">
            <v-list-item v-for="(item, i) in filteredItems" :key="i" @click="showElementDetail(item)">
              <v-list-item-content>
                <v-list-item-title v-text="item.name.toUpperCase()"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "List",
  props: ["option", "items"],
  data() {
    return {
      dataList: [],
      title: "",
      filterText: ""
    };
  },
  async beforeMount() {
    let selectedOption = "";
    if(this.option){
      selectedOption = this.option;
      localStorage['option'] = JSON.stringify(this.option);
    } else {
      selectedOption = localStorage['option'] ? JSON.parse(localStorage['option']) : "";
    }
    switch (selectedOption) {
      case "people":
        this.title = 'PEOPLE';
        break;
      case "planets":
        this.title = 'PLANETS';
        break;
      case "starships":
        this.title = 'STARSHIPS';
        break;
    }
    if(this.items){
      this.dataList = this.items;
      localStorage['items'] = JSON.stringify(this.dataList);
    } else {
      this.dataList = localStorage['items'] ? JSON.parse(localStorage['items']) : [];
    }
  },
  computed: {
      filter(){
          return this.filterText;
      },
      filteredItems(){
          return this.filter ? this.dataList.filter(d => d.name.toLowerCase().includes(this.filter.toLowerCase())) : this.dataList;
      }
  },
  methods: {
    showElementDetail(element) {
      this.$router.push({
        name: "Detail",
        params: {
          element: element,
          type: localStorage['option'] ? JSON.parse(localStorage['option']) : this.option
        },
      });
    },
  }
};
</script>
