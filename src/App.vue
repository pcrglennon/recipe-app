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
import {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential,
} from 'mongodb-stitch-browser-sdk';
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
    // TODO - connect to own API once deployed
    if (process.env.NODE_ENV === 'production') {
      const client = Stitch.initializeDefaultAppClient('recipe-app-pekwx');

      const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('recipes-app');

      this.isLoading = true;

      client.auth.loginWithCredential(new AnonymousCredential()).then((user) => {
        return db.collection('recipes').find({}, { limit: 100 }).asArray();
      }).then((docs) => {
        this.recipes = docs;
        this.isLoading = false;
      }).catch((err) => {
        console.error('STITCH ERROR');
        console.error(err);
        this.isLoading = false;
      });
    } else {
      axios.get('http://localhost:3000/recipes')
        .then((response) => {
          this.recipes = response.data;
        }).catch((err) => {
          console.error('LOCAL API ERROR');
          console.error(err);
          this.isLoading = false;
        });
    }
  }
}
</script>
