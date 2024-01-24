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

// nullable numbers are considered unsafe by default
const num: number | undefined = 0
if (num) {
  console.log('num is defined')
}

// nullable strings are considered unsafe by default
const str: string | null = null
if (!str) {
  console.log('str is empty')
}

// nullable booleans are considered unsafe by default
function foo (bool?: boolean) {
  if (bool) {
    bar()
  }
}

// `any`, unconstrained generics and unions of more than one primitive type are disallowed
const foo = <T>(arg: T) => (arg ? 1 : 0)

// always-truthy and always-falsy types are disallowed
let obj = {}
while (obj) {
  obj = getObj()
}
</script>
