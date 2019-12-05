<template>
  <div class="mb-4 p-4 border-2 border-gray-800">
    <h3 class="mb-2">{{headerText}}</h3>

    <div class="flex flex-col border border-dashed border-gray-600 md:flex-row">
      <div class="flex md:w-1/3">
        <ingredient-list
          :ingredients="recipe.ingredients"
        />
      </div>

      <!-- horizontal divider (sm-) -->
      <div class="flex border-t mx-2 border-dashed border-gray-600 md:hidden"/>

      <!-- vertical divider (md+) -->
      <div class="hidden border-r my-2 border-dashed border-gray-600 md:flex"/>

      <div class="flex md:w-2/3">
        <instruction-list
          :instructions="recipe.instructions"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import IngredientList from './IngredientList.vue';
import InstructionList from './InstructionList.vue';

@Component({
  components: {
    IngredientList,
    InstructionList,
  },
})
export default class Recipe extends Vue {
  @Prop({ required: true }) readonly recipe!: any;
  @Prop(Number) readonly index: number | undefined;

  get headerText() {
    if (!this.index) return this.recipe.name;

    return `${this.index}: ${this.recipe.name}`;
  }
}
</script>
