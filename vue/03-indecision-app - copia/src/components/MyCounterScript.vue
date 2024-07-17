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

<script lang="ts">
import { defineComponent } from 'vue';
import { useCounter } from '@/composables/useCounter';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const { counter, squareCounter } = useCounter(props.value);

    // const counter = ref(props.value);
    // const squereCounter = computed(() => counter.value * counter.value);

    return {
      counter: counter,
      squareCounter,
    };
  },
});

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
