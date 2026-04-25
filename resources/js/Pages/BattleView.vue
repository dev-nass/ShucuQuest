<script setup lang="ts">
import { useFetchWords } from "@/composables/battle/useFetchWords";
import { onMounted } from "vue";

const { words, fetchData } = useFetchWords();

onMounted(async () => {
    await fetchData();

    console.log(words.value);
});
</script>

<template>Battle View</template>
