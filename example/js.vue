<template>
  <test />
  <div v-if="!props.n">
    {{ a }}
  </div>
</template>

<script setup>
// 当未`import vue`相关api的时候，`props`类型在模版表达式中无法被正确推断
// import { } from 'vue'

const props = defineProps({
  c: Boolean,
})

// 此时正确的 props.c 类型应为 number
const d = () => `cc ${props.c}`;

const a = 1

const b_3 = 45445
</script>
