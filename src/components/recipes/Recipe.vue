<template>
  <div class="recipe">
    <h3>{{headerText}}</h3>

    <ingredient-list :ingredients="recipe.ingredients" />

    <instruction-list :instructions="recipe.instructions" />
  </div>
</template>

<script>
import IngredientList from './IngredientList.vue';
import InstructionList from './InstructionList.vue';

export default {
  name: 'recipe',
  components: {
    IngredientList,
    InstructionList,
  },
  props: {
    recipe: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  computed: {
    headerText() {
      if (!this.index) return this.recipe.name;

      return `${this.index}: ${this.recipe.name}`;
    },
  },
};
</script>

<style scoped>
  .recipe {
    margin-bottom: 25px;
    padding: 20px 25px;
    border: 2px solid black;
  }
</style>
