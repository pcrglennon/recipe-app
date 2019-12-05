<template>
  <div class="p-2">
    <h4 class="mb-2">Instructions</h4>

    <ol class="list-decimal list-inside">
      <li
        v-for="(instruction, index) in instructions"
        :key="index"
      >
        {{formatInstruction(instruction)}}
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

// Schema Assumption: instructions is simple Array of Strings

@Component
export default class InstructionList extends Vue {
  @Prop({ type: Array, required: true }) readonly instructions!: string[];

  formatInstruction(instruction: string): string {
    return instruction;
  }
}
</script>
