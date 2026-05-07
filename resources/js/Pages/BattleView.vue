<script setup lang="ts">
import GridSquare from "@/Components/GridSquare.vue";
import { useFetchWords } from "@/composables/battle/useFetchWords";
import { useGameStates } from "@/stores/useGameStates";
import { onMounted } from "vue";

const { fetchData, initGame } = useFetchWords();
const { dictionary, grid } = useGameStates();

onMounted(async () => {
    await fetchData();
    initGame();
    // TODO: continoue this
    console.log(dictionary.value);
});
</script>

<template>
    Battle View

    <div
        class="border border-red-500 w-full grid grid-cols-6 gap-3 justify-center"
    >
        <GridSquare v-for="g in grid"> {{ g.letter }} </GridSquare>
    </div>
</template>
