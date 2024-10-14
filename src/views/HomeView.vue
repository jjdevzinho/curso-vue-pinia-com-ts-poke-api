<script setup lang="ts">
import { useCounterStore } from '@/store/counter'
import { storeToRefs } from 'pinia'

const userCounter = useCounterStore()
const { increment } = userCounter
// use storeToRefs to get reactive refs from the store ""
const { double } = storeToRefs(userCounter)
</script>

<template>
  <div>
    <h1>Home</h1>
    <p>Counter: {{ userCounter.count }}</p>
    <p>Counter double: {{ double }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
