<template>
  <div id="app">
    <h2 v-if="isLoading">Loading</h2>
    <h2 v-else>Recipes count: {{ recipes.length }}</h2>
  </div>
</template>

<script>
import {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential,
} from 'mongodb-stitch-browser-sdk';

export default {
  name: 'app',
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
