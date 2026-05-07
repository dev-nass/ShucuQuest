<script setup lang="ts">
import { useFetchWords } from "@/composables/battle/useFetchWords";
import { useGameStates } from "@/stores/useGameStates";
import { onMounted } from "vue";

const { fetchData } = useFetchWords();
const { dictionary } = useGameStates();

onMounted(async () => {
    await fetchData();

    // TODO: continoue this
    console.log(dictionary.value);
});
</script>

<template>Battle View</template>
