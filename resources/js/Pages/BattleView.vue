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

onMounted(async () => {
    await fetchData();
    initGame();
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

        <!-- Middle Section -->
        <div class="flex-1 flex items-center mb-8">
            <div
                class="w-full flex flex-col lg:flex-row lg:items-center lg:relative lg:justify-between"
            >
                <!-- Characters row (sm/md) | pushed to edges (lg) -->
                <div class="flex justify-between lg:contents">
                    <!-- Left Character -->
                    <div class="lg:flex-1 lg:flex lg:justify-start lg:pl-8">
                        <div
                            class="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 bg-[#0D1526] border-2 border-[#A855F7] flex items-center justify-center"
                        >
                            <span class="text-[#A855F7] font-pixel text-sm">
                                <span class="text-[#A855F7] font-pixel text-sm">
                                    <img
                                        src="/public/images/knight.png"
                                        alt="dragon"
                                    />
                                </span>
                            </span>
                        </div>
                    </div>
                    <!-- Right Character -->
                    <div class="lg:flex-1 lg:flex lg:justify-end lg:pr-8">
                        <div
                            class="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 bg-[#0D1526] border-2 border-[#A855F7] flex items-center justify-center"
                        >
                            <span class="text-[#A855F7] font-pixel text-sm">
                                <img
                                    src="/public/images/dragon.png"
                                    alt="dragon"
                                />
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Current Word: below characters on sm/md, absolutely centered on lg -->
                <div
                    class="flex justify-center mt-6 lg:mt-0 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
                >
                    <div class="grid grid-cols-6 gap-3">
                        <GridSquare
                            v-for="(c, index) in currentWord"
                            :key="index"
                            @click="removeLetter(index)"
                        >
                            {{ c }}
                        </GridSquare>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Section: Grid + Buttons -->
        <div class="flex flex-col items-center gap-6">
            <div class="grid grid-cols-6 gap-3">
                <GridSquare
                    v-for="g in grid"
                    :key="g.id"
                    :selected="selected.includes(g.id)"
                    @click="toggleTile(g.id)"
                >
                    {{ g.letter }}
                </GridSquare>
            </div>
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
                    ATTACK
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
