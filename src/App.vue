<template>
  <div id="app" class="container mx-auto my-32 font-sans">
    <h1 class="mb-4">Recipes App</h1>

    <div v-if="isLoading">
      <h2>Loading</h2>
    </div>

    <div v-else>
      <h2 class="mb-2">Recipes count: {{ recipes.length }}</h2>

      <div
        v-for="(recipe, index) in recipes"
        :key="recipe._id.toString()"
      >
        <recipe
          :recipe="recipe"
          :index="index + 1"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';

import Recipe from './components/recipes/Recipe.vue';

@Component({
  components: {
    Recipe,
  },
})
export default class App extends Vue {
  isLoading = false;
  // TODO - create Recipe interface
  recipes: Array<any> = [];

  created() {
    axios.get(`${process.env.VUE_APP_API_URL_BASE}/recipes`)
      .then((response) => {
        this.recipes = response.data;
      }).catch((err) => {
        console.error('API ERROR');
        console.error(err);
        this.isLoading = false;
      });
  }
}
</script>
