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
