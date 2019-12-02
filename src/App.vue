<template>
  <div id="app">
    <div v-if="isLoading">
      <h2>Loading</h2>
    </div>

    <div v-else>
      <h2>Recipes count: {{ recipes.length }}</h2>

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

<script>
import {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential,
} from 'mongodb-stitch-browser-sdk';

import Recipe from './components/recipes/Recipe.vue';

export default {
  name: 'app',
  components: {
    Recipe,
  },
  data() {
    return {
      isLoading: false,
      recipes: [],
    };
  },
  created() {
    const client = Stitch.initializeDefaultAppClient('recipe-app-pekwx');

    const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('recipes-app');

    this.isLoading = true;

    client.auth.loginWithCredential(new AnonymousCredential()).then((user) => {
      return db.collection('recipes').find({}, { limit: 100 }).asArray();
    }).then((docs) => {
      console.log('Found docs', docs);
      console.log(docs.length);
      this.recipes = docs;
      this.isLoading = false;
    }).catch((err) => {
      console.error('STITCH ERROR');
      console.error(err);
      this.isLoading = false;
    });
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
