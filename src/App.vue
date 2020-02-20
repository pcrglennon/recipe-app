<template>
  <div id="app" class="container mx-auto my-32 font-sans">
    <h1 class="mb-4">Recipes App</h1>

    <div v-if="$apollo.loading">
      <h2>Loading</h2>
    </div>

    <div v-else>
      <h2 class="mb-2">Recipes count: {{ recipes.length }}</h2>

      <div
        v-for="(recipe, index) in recipes"
        :key="recipe.id"
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
import { DocumentNode, gql } from 'apollo-boost';
import { Component, Vue } from 'vue-property-decorator';

import Recipe from './components/recipes/Recipe.vue';

const gqlRecipes: DocumentNode = gql`query {
  recipes {
    id
    name
    current {
      ingredients
      instructions
      version
    }
    previous {
      ingredients
      instructions
      version
    }
  }
}`;

Component.registerHooks([
  'apollo',
]);

@Component({
  components: {
    Recipe,
  },
})
export default class App extends Vue {
  // TODO - create Recipe interface
  recipes: Array<any> = [];

  get apollo() {
    return {
      recipes: gqlRecipes,
    };
  }
}
</script>
