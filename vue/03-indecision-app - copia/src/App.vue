<template>
  <h1 className="text-3xl font-bold underline">Hello world!</h1>
  <hr />

  <MyCounter :value="1"></MyCounter>
  <MyCounterScript :value="12"></MyCounterScript>
  <MyCounterScript2 :value="13"></MyCounterScript2>
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
</script>
