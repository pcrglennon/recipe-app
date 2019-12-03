<template>
  <div class="p-2">
    <h4 class="mb-2">Ingredients</h4>

    <ul class="list-disc list-inside">
      <li
        v-for="(ingredient, index) in ingredients"
        :key="index"
      >
        {{formatIngredient(ingredient)}}
      </li>
    </ul>
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
