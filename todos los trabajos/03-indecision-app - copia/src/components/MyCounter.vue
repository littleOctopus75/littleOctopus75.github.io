<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Squere: {{ squareCounter }}</h3>
    <div>
      <button class="btn" @click="change(1)">+1</button>
      <button class="btn" @click="change(-1)">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';
interface Props {
  value?: number;
}

const props = defineProps<Props>();
const { counter, squareCounter } = useCounter(10);

// import { ref, computed } from 'vue';

// const counter = ref(props.value ?? 5);
// const squereCounter = computed(() => counter.value * counter.value);

const change = (num: number) => {
  counter.value = counter.value + num;
  console.log(counter.value);
};
</script>

<style scoped>
.btn {
  @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2;
}
</style>
