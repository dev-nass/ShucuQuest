<script setup lang="ts">
import GridSquare from "@/Components/GridSquare.vue";
import { useFetchWords } from "@/composables/battle/useFetchWords";
import { useGameStates } from "@/stores/useGameStates";
import { onMounted } from "vue";

const {
    fetchData,
    initGame,
    toggleTile,
    removeLetter,
    submitWord,
    clearSelection,
} = useFetchWords();
const { status, dictionary, grid, selected, currentWord } = useGameStates();

console.log("Current word", currentWord.value);

onMounted(async () => {
    await fetchData();
    initGame();
    // TODO: continoue this
    console.log(dictionary.value);
});
</script>

<template>
    <div class="min-h-screen bg-[#0C0F1A] flex flex-col px-6 py-12">
        <!-- Top Status -->
        <div class="text-center mb-8">
            <h1 class="text-white font-pixel text-2xl">
                Current Status: {{ status }}
            </h1>
        </div>

        <!-- Middle Section: Characters + Selected Letters -->
        <div
            class="flex-1 flex items-center justify-between px-24 mb-8 relative"
        >
            <!-- Left Character Placeholder -->
            <div
                class="w-64 h-64 bg-[#0D1526] border-2 border-[#A855F7] flex items-center justify-center"
            >
                <span class="text-[#A855F7] font-pixel text-sm"
                    >CHARACTER 1</span
                >
            </div>

            <!-- Selected Letters (Center - Absolute) -->
            <div
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-6 gap-3"
            >
                <GridSquare
                    v-for="(c, index) in currentWord"
                    :key="index"
                    @click="removeLetter(index)"
                >
                    {{ c }}
                </GridSquare>
            </div>

            <!-- Right Character Placeholder -->
            <div
                class="w-64 h-64 bg-[#0D1526] border-2 border-[#A855F7] flex items-center justify-center"
            >
                <span class="text-[#A855F7] font-pixel text-sm"
                    >CHARACTER 2</span
                >
            </div>
        </div>

        <!-- Bottom Section: Grid + Buttons -->
        <div class="flex flex-col items-center gap-6">
            <!-- Grid of letters -->
            <div class="grid grid-cols-6 gap-3">
                <GridSquare v-for="g in grid" @click="toggleTile(g.id)">
                    {{ g.letter }}
                </GridSquare>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-4">
                <button
                    class="text-[#0F172A] text-sm font-bold tracking-widest px-6 py-3 font-pixel"
                    style="
                        background: linear-gradient(to right, #a855f7, #f0a8fc);
                        box-shadow:
                            0 0 16px #a855f7,
                            0 0 10px #f0a8fc;
                    "
                    @click="submitWord"
                >
                    SUBMIT WORD
                </button>
                <button
                    class="text-[#A855F7] text-sm tracking-widest px-6 py-3 font-pixel"
                    style="background-color: #0c0f1a; border: 1px solid #a855f7"
                    @click="clearSelection"
                >
                    NEW GAME
                </button>
            </div>
        </div>
    </div>
</template>
