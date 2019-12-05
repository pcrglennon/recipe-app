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

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

// Schema Assumption: ingredients is simple Array of Strings

@Component
export default class IngredientList extends Vue {
  @Prop({ type: Array, required: true }) readonly ingredients!: string[];

  formatIngredient(ingredient: string): string {
    return ingredient;
  }
}
</script>
