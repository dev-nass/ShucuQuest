<script setup lang="ts">
import GridSquare from "@/Components/GridSquare.vue";
import Modal from "@/Components/Modal.vue";
import PixelHearts from "@/Components/PixelHearts.vue";
import { useAnimation } from "@/composables/battle/useAnimation";
import { useAttack } from "@/composables/battle/useAttack";
import { useDisplay } from "@/composables/battle/useDisplay";
import { useFetchWords } from "@/composables/battle/useFetchWords";
import { useGame } from "@/composables/battle/useGame";
import { useWords } from "@/composables/battle/useWords";
import { useGameStates } from "@/stores/useGameStates";
import { onMounted, ref, watch } from "vue";

const {
    status,
    grid,
    selected,
    currentWord,
    knightClass,
    dragonClass,
    fireballVisible,
    fireballClass,
    currentWordAnimation,
    playerHealth,
    enemyHealth,
    isPlayersTurn,
    isGameOver,
} = useGameStates();

const { fetchData } = useFetchWords();
const { initGame, toggleTile, endGame } = useGame();
const { removeLetter } = useWords();
const { updateWordDisplay } = useDisplay();
const {
    clearSelection,
    submitWord,
    applyPlayerAttackAnimation,
    applyEnemeyAttackAnimation,
} = useAttack();
const { animateCurrentSelectedWord } = useAnimation();

// coordinator functions

function handleGridSquareClick(index: number) {
    removeLetter(index);
    updateWordDisplay();
    animateCurrentSelectedWord();
}

function handleTileClick(id: number) {
    if (!isPlayersTurn.value) return;
    toggleTile(id);
    updateWordDisplay();
    animateCurrentSelectedWord();
}

/**
 * Description: Submit the attack and apply the animations
 * */
async function handleSubmitAndAttackClick() {
    const attackValid = submitWord();
    if (!attackValid) return;
    isPlayersTurn.value = false;

    await applyPlayerAttackAnimation();
    await applyEnemeyAttackAnimation();

    clearSelection(); // clear the selected words before attck
    endGame();
    isPlayersTurn.value = true;
}

function handleResetClick() {
    initGame();
}

onMounted(async () => {
    await fetchData();
    initGame();
});
</script>

<template>
    <Modal :open="isGameOver" @close="handleResetClick" />
    <div class="min-h-screen bg-[#0C0F1A] flex flex-col">
        <section
            class="bg-[url('/public/images/dungeon-v2.png')] bg-center bg-no-repeat bg-[size:110%]"
        >
            <!-- Top Status -->
            <div class="flex justify-between">
                <!-- User Health / User Character Health  -->
                <PixelHearts :hp="playerHealth" :size="4" />
                <div class="text-center mb-8">
                    <h1 class="text-white font-pixel text-2xl">
                        Current Status: {{ status }}
                    </h1>
                </div>
                <!-- Enemy Health / Enemy Character Health  -->
                <PixelHearts :hp="enemyHealth" :size="4" class="-scale-x-100" />
            </div>

            <!-- Middle Section -->
            <div class="flex-1 flex items-center mb-8">
                <div
                    class="w-full flex flex-col lg:flex-row lg:items-center lg:relative lg:justify-between"
                >
                    <!-- Characters row (sm/md) | pushed to edges (lg) -->
                    <div class="flex justify-between lg:contents">
                        <!-- Left Character -->
                        <div
                            :class="knightClass"
                            class="lg:flex-1 lg:flex lg:justify-start lg:pl-8"
                        >
                            <div
                                class="w-40 h-40 sm:w-52 sm:h-52 lg:w-75 lg:h-75 flex items-center justify-center"
                            >
                                <span class="text-[#A855F7] font-pixel text-sm">
                                    <span
                                        class="text-[#A855F7] font-pixel text-sm"
                                    >
                                        <img
                                            src="/public/images/knight.png"
                                            alt="dragon"
                                        />
                                    </span>
                                </span>
                            </div>
                        </div>

                        <img
                            v-if="fireballVisible"
                            :class="fireballClass"
                            src="/public/images/fireball.png"
                            alt="fireball"
                            class="absolute right-[15%] top-1/2 -translate-y-1/2 h-50 pointer-events-none"
                            style="--fireball-travel: -60vw"
                        />

                        <!-- Right Character -->
                        <div
                            :class="dragonClass"
                            class="lg:flex-1 lg:flex lg:justify-end lg:pr-8"
                        >
                            <div
                                class="w-40 h-40 sm:w-52 sm:h-52 lg:w-75 lg:h-75 flex items-center justify-center"
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
                        v-if="isPlayersTurn"
                        class="flex justify-center mt-6 lg:mt-0 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
                    >
                        <div class="grid grid-cols-6 gap-3">
                            <GridSquare
                                v-for="(c, index) in currentWord"
                                :key="index"
                                :animationIntensity="currentWordAnimation"
                                @click="handleGridSquareClick(index)"
                            >
                                {{ c }}
                            </GridSquare>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Bottom Section: Grid + Buttons -->
        <div class="flex flex-col items-center gap-6">
            <div class="grid grid-cols-4 gap-3">
                <GridSquare
                    v-for="g in grid"
                    :key="g.id"
                    :selected="selected.includes(g.id)"
                    :disabled="isPlayersTurn === false"
                    @click="handleTileClick(g.id)"
                >
                    {{ g.letter }}
                </GridSquare>
            </div>
            <div class="flex gap-4">
                <button
                    class="text-[ #0F172A] text-sm font-bold tracking-widest px-6 py-3 font-pixel"
                    style="
                        background: linear-gradient(to right, #a855f7, #f0a8fc);
                        box-shadow:
                            0 0 16px #a855f7,
                            0 0 10px #f0a8fc;
                    "
                    @click="handleSubmitAndAttackClick()"
                >
                    ATTACK
                </button>
                <button
                    class="text-[#A855F7] text-sm tracking-widest px-6 py-3 font-pixel"
                    style="background-color: #0c0f1a; border: 1px solid #a855f7"
                    @click="handleResetClick()"
                >
                    RESET
                </button>
            </div>
        </div>
    </div>
</template>
