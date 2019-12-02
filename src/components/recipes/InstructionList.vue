<template>
  <div class="instruction-list">
    <h4>Instructions</h4>

    <div
      v-for="(instruction, index) in instructions"
      :key="index"
    >
      {{formatInstruction(instruction)}}
    </div>
  </div>
</template>

<script>
// Schema Assumption: instructions is simple Array of Strings

export default {
  name: 'instruction-list',
  props: {
    instructions: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formatInstruction(instruction) {
      return instruction;
    },
  },
};
</script>

<style scoped>
  .instruction-list {
    margin-bottom: 25px;
    padding: 10px 15px;
    border: 1px dashed grey;
  }
</style>
