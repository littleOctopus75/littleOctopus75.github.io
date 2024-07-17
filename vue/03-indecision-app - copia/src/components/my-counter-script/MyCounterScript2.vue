<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Squere: {{ squareCounter }}</h3>
    <div>
      <!-- <button @click="change(1)">+1</button>
      <button @click="change(-1)">-1</button> -->
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./MyCounterScript2.ts">
// import { ref, computed } from 'vue';
// interface Props {
//   value?: number;
// }
// const props = defineProps<Props>();
// const counter = ref(props.value ?? 5);
// const squereCounter = computed(() => counter.value * counter.value);
// const change = (num: number) => {
//   counter.value = counter.value + num;
//   console.log(counter.value);
// };
</script>
