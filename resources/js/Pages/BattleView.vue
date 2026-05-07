<script setup lang="ts">
import GridSquare from "@/Components/GridSquare.vue";
import { useFetchWords } from "@/composables/battle/useFetchWords";
import { useGameStates } from "@/stores/useGameStates";
import { onMounted } from "vue";

const { fetchData, initGame, toggleTile } = useFetchWords();
const { status, dictionary, grid, selected, currentWord } = useGameStates();

onMounted(async () => {
    await fetchData();
    initGame();
    // TODO: continoue this
    console.log(dictionary.value);
});
</script>

<template>
    <div class="flex flex-col items-center">
        <h1>Current Status: {{ status }}</h1>
    </div>
    <!-- Selected letters -->
    <div
        class="border border-red-500 w-full grid grid-cols-6 gap-3 justify-center"
    >
        <GridSquare v-for="c in currentWord" @click="">
            {{ c }}
        </GridSquare>
    </div>

    <!-- Grid of letters -->
    <div
        class="border border-red-500 w-full grid grid-cols-6 gap-3 justify-center"
    >
        <GridSquare v-for="g in grid" @click="toggleTile(g.id)">
            {{ g.letter }}
        </GridSquare>
    </div>
</template>
