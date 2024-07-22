<template>
  <section
    v-if="isLoading || randomPokemon.id === null"
    raclass="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando pokemon</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="m-5">¿Quien es este Pokémon?</h1>
    <h3>{{ randomPokemon }}</h3>

    <!-- Pokémon picture -->
    <PokemonPicture :pokemon-id="randomPokemon.id"></PokemonPicture>

    <!-- Pokrmon Option -->
    <PokemonOption />
  </section>
</template>

<script setup lang="ts">
import PokemonOption from '../component/PokemonOption.vue';
import PokemonPicture from '../component/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';

const { gameStatus, isLoading, randomPokemon } = usePokemonGame();
</script>
