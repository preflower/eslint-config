<template>
  <test />
  <!-- 此时应该报 @typescript-eslint/strict-boolean-expressions 错误 -->
  <div v-if="!props.n">
    {{ a }}
  </div>
</template>

<script setup lang="ts">
// 当未`import vue`相关api的时候，`props`类型在模版表达式中无法被正确推断
// import { } from 'vue'

const props = defineProps<{
  c: number
  n?: string
}>()

// 此时正确的 props.c 类型应为 number
const d = () => `cc ${props.c}`

interface a {}

const a = 1

const b_3 = 45445
</script>
