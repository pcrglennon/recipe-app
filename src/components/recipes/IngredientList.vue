<template>
  <div class="ingredient-list">
    <h4>Ingredients</h4>

    <div
      v-for="(ingredient, index) in ingredients"
      :key="index"
    >
      {{formatIngredient(ingredient)}}
    </div>
  </div>
</template>

<script>
// Schema Assumption: ingredients is simple Array of Strings

export default {
  name: 'ingredient-list',
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formatIngredient(ingredient) {
      return ingredient;
    },
  },
};
</script>

<style scoped>
  .ingredient-list {
    margin-bottom: 25px;
    padding: 10px 15px;
    border: 1px dashed grey;
  }
</style>
