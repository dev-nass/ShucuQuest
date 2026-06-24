<script setup lang="ts">
import GridSquare from "@/Components/GridSquare.vue";
import Modal from "@/Components/Modal.vue";
import PixelHearts from "@/Components/PixelHearts.vue";
import Button from "@/Components/Button.vue";
import { Skull } from "@lucide/vue";

import { useAnimation } from "@/composables/battle/useAnimation";
import { useAttack } from "@/composables/battle/useAttack";
import { useDisplay } from "@/composables/battle/useDisplay";
import { useFetchWords } from "@/composables/battle/useFetchWords";
import { useGame } from "@/composables/battle/useGame";
import { useWords } from "@/composables/battle/useWords";
import { useGameStates } from "@/stores/useGameStates";
import { computed, onMounted, ref, watch } from "vue";
import { router } from "@inertiajs/vue3";
import { useHealing } from "@/composables/potions/useHealing";

const {
    status,
    grid,
    selected,
    currentWord,
    playerCharacterClass,
    dragonClass,
    playerFireballVisible,
    enemyFireballVisible,
    fireballClass,
    currentWordAnimation,
    MAX_PLAYER_HEALTH,
    MAX_ENEMY_HEALTH,
    playerHealth,
    enemyHealth,
    isPlayersTurn,
    isGameOver,
    selectedChar,
} = useGameStates();

const { fetchData } = useFetchWords();
const { initGame, toggleTile, applyRoundEndWalkIn, endGame } = useGame();
const { removeLetter } = useWords();
const { updateWordDisplay } = useDisplay();
const {
    clearSelection,
    submitWord,
    applyKnightAttackAnimation,
    applyMageAttackAnimation,
    applyRogueAttackAnimation,
    applyEnemyAttackAnimation,
} = useAttack();
const { animateCurrentSelectedWord } = useAnimation();
const { applyHealing } = useHealing();

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
    if (!attackValid || isGameOver.value) return;
    isPlayersTurn.value = false;

    if (selectedChar.value === "knight") await applyKnightAttackAnimation();
    else if (selectedChar.value === "mage") await applyMageAttackAnimation();
    else if (selectedChar.value === "rogue") await applyRogueAttackAnimation();

    await applyEnemyAttackAnimation();

    clearSelection(); // this clear the selected words before attck
    await applyRoundEndWalkIn();
    endGame(); // this verify if isGameOVer is true or false
    isPlayersTurn.value = true;
}

function handleResetClick() {
    initGame();
    updateWordDisplay();
}

// helper function

function handleGoBack() {
    router.visit("/");
}

// character selection
type Characters = "knight" | "mage" | "rogue";
const loadCharacterSprite: Record<Characters, string> = {
    knight: "/images/knight.png",
    mage: "/images/mage.png",
    rogue: "/images/rogue.png",
};

const characterSpriteSrc = computed(
    () =>
        loadCharacterSprite[selectedChar.value as Characters] ??
        "/public/images/knight.png",
);

onMounted(async () => {
    await fetchData();
    initGame();
});
</script>

<template>
    <!-- Game Over modal -->
    <Modal :open="isGameOver">
        <template #icon>
            <Skull class="text-yellow-500" />
        </template>
        <template #header>{{ status }}</template>
        <template #footer>
            <Button @click="handleResetClick">Reset Game</Button>
            <Button variant="ghost" @click="handleGoBack">Back to Home</Button>
        </template>
    </Modal>

    <div class="min-h-screen bg-[#0C0F1A] flex flex-col">
        <section
            class="bg-[url('/public/images/dungeon-v2.png')] bg-center bg-no-repeat bg-[size:110%]"
        >
            <!-- Top Status -->
            <div class="flex justify-between">
                <!-- User Health / User Character Health  -->
                <PixelHearts
                    :hp="playerHealth"
                    :maxHp="MAX_PLAYER_HEALTH"
                    :size="4"
                />
                <div class="text-center mb-8">
                    <h1 class="text-white font-pixel text-2xl">
                        Current Status: {{ status }}
                    </h1>
                </div>
                <!-- Enemy Health / Enemy Character Health  -->
                <PixelHearts
                    :hp="enemyHealth"
                    :maxHp="MAX_ENEMY_HEALTH"
                    :size="4"
                    class="-scale-x-100"
                />
            </div>

            <!-- Middle Section -->
            <div class="flex-1 flex items-center mb-8">
                <div
                    class="w-full flex flex-col lg:flex-row lg:items-center lg:relative lg:justify-between"
                >
                    <!-- Characters row (sm/md) | pushed to edges (lg) -->
                    <div class="flex justify-between lg:contents">
                        <!-- Mage fireball (player side → travels right) -->
                        <img
                            v-if="playerFireballVisible"
                            :class="fireballClass"
                            src="/public/images/fireball-mirrored.png"
                            alt="fireball"
                            class="absolute left-[15%] top-1/2 -translate-y-1/2 h-50 pointer-events-none"
                            style="--fireball-travel: 60vw"
                        />

                        <!-- Left Character -->
                        <div
                            :class="playerCharacterClass"
                            class="player-idle lg:flex lg:justify-start lg:pl-8"
                        >
                            <div
                                class="w-40 h-40 sm:w-52 sm:h-52 lg:w-75 lg:h-75 flex items-center justify-center"
                            >
                                <span class="text-[#A855F7] font-pixel text-sm">
                                    <span
                                        class="text-[#A855F7] font-pixel text-sm"
                                    >
                                        <!-- Player Character -->
                                        <img
                                            v-if="playerHealth > 0"
                                            :src="characterSpriteSrc"
                                            alt="player-character"
                                        />

                                        <img
                                            v-else
                                            src="/public/images/grave.png"
                                            alt="dragon"
                                        />
                                    </span>
                                </span>
                            </div>
                        </div>

                        <!-- Dragon fireball (enemy side → travels left) -->
                        <img
                            v-if="enemyFireballVisible"
                            :class="fireballClass"
                            src="/public/images/fireball.png"
                            alt="fireball"
                            class="absolute right-[15%] top-1/2 -translate-y-1/2 h-50 pointer-events-none"
                            style="--fireball-travel: -60vw"
                        />

                        <!-- Right Character -->
                        <div
                            :class="dragonClass"
                            class="dragon-idle lg:flex-1 lg:flex lg:justify-end lg:pr-8"
                        >
                            <div
                                class="w-40 h-40 sm:w-52 sm:h-52 lg:w-75 lg:h-75 flex items-center justify-center"
                            >
                                <span class="text-[#A855F7] font-pixel text-sm">
                                    <!-- Enemy Character -->
                                    <img
                                        v-if="enemyHealth > 0"
                                        src="/public/images/dragon.png"
                                        alt="dragon"
                                    />

                                    <img
                                        v-else
                                        src="/public/images/grave.png"
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
        <div class="grid grid-cols-3 gap-4 items-stretch justify-center">
            <!-- LEFT COLUMN: Potions (top, shorter row) + Equipment (bottom, larger row) -->
            <div class="flex flex-col gap-3 w-full h-90">
                <!-- Potions row (shorter height) -->
                <div
                    class="flex items-center justify-center gap-6 p-2 rounded"
                    style="
                        background-color: #0d1526;
                        border: 1px solid #a855f7;
                        height: 120px;
                    "
                >
                    <!-- Placeholder potion slots -->
                    <div
                        v-for="n in 3"
                        :key="`potion-${n}`"
                        class="flex items-center justify-center rounded"
                        style="
                            width: 115px;
                            background-color: #3b0764;
                            border: 1px solid #2dd4bf;
                        "
                    >
                        <img
                            @click="applyHealing"
                            class="cursor-pointer"
                            src="/public/images/potion.gif"
                            alt="potion-imgs"
                        />
                    </div>
                </div>

                <!-- Equipment row (taller, placeholder images) -->
                <div
                    class="grid grid-cols-3 gap-2 p-2 rounded flex-1"
                    style="background-color: #0d1526; border: 1px solid #a855f7"
                >
                    <div
                        v-for="n in 3"
                        :key="`equip-${n}`"
                        class="flex flex-col items-center justify-center gap-1 rounded h-full p-1"
                        style="
                            background-color: #0c0f1a;
                            border: 1px solid #6d28d9;
                        "
                    >
                        <img
                            src="/public/images/sword.png"
                            alt="equipment placeholder"
                            class="w-3/4 object-contain"
                        />
                        <p
                            class="text-xs font-bold font-pixel text-center leading-tight"
                            style="color: #f3e8ff"
                        >
                            Sword of Justice
                        </p>
                        <p
                            class="text-[10px] font-pixel text-center"
                            style="color: #2dd4bf"
                        >
                            (Sword)
                        </p>
                    </div>
                </div>
            </div>

            <!-- MIDDLE COLUMN: Scrambled words grid + action buttons -->
            <div
                class="flex flex-col items-center justify-center gap-6 w-full h-full"
            >
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
                            background: linear-gradient(
                                to right,
                                #a855f7,
                                #f0a8fc
                            );
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
                        style="
                            background-color: #0c0f1a;
                            border: 1px solid #a855f7;
                        "
                        @click="handleResetClick()"
                    >
                        RESET
                    </button>
                </div>
            </div>

            <!-- RIGHT COLUMN: Enemy attack desc + Enemy passive desc + Enemy detail summary -->
            <div class="flex flex-col gap-3 w-full h-90">
                <!-- Enemy attack description (short row) -->
                <div
                    class="p-2 rounded"
                    style="background-color: #0d1526; border: 1px solid #a855f7"
                >
                    <p
                        class="text-xs font-bold font-pixel"
                        style="color: #f0abfc"
                    >
                        ATTACK
                    </p>
                    <p class="text-lg font-pixel" style="color: #e9c8f5">
                        Deals heavy damage to a single target.
                    </p>
                </div>

                <!-- Enemy passive skill description (short row) -->
                <div
                    class="p-2 rounded"
                    style="background-color: #0d1526; border: 1px solid #a855f7"
                >
                    <p
                        class="text-xs font-bold font-pixel"
                        style="color: #2dd4bf"
                    >
                        PASSIVE
                    </p>
                    <p class="text-lg font-pixel" style="color: #e9c8f5">
                        Regenerates a small amount of HP each turn.
                    </p>
                </div>

                <!-- Enemy detail summary (largest row) -->
                <div
                    class="p-3 rounded flex-1"
                    style="
                        background-color: #0d1526;
                        border: 1px solid #a855f7;
                        min-height: 180px;
                    "
                >
                    <p
                        class="text-sm font-bold font-pixel mb-2"
                        style="color: #a855f7"
                    >
                        ENEMY
                    </p>
                    <p class="font-pixel mb-1" style="color: #f3e8ff">
                        Name: Dragon Brute
                    </p>
                    <p class="font-pixel mb-1" style="color: #f3e8ff">
                        Type: Melee
                    </p>
                    <p class="font-pixel mb-1" style="color: #f3e8ff">
                        Level: 5
                    </p>
                    <p class="font-pixel" style="color: #f3e8ff">
                        A hulking brute that hits hard but moves slowly.
                        Vulnerable to ranged attacks.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes pixel-bob-player {
    0%,
    100% {
        transform: translateY(0px);
    }
    25% {
        transform: translateY(-6px);
    }
    50% {
        transform: translateY(-6px);
    }
    75% {
        transform: translateY(0px);
    }
}

@keyframes pixel-bob-dragon {
    0%,
    100% {
        transform: translateY(0px);
    }
    25% {
        transform: translateY(-6px);
    }
    50% {
        transform: translateY(-6px);
    }
    75% {
        transform: translateY(0px);
    }
}

.player-idle img {
    animation: pixel-bob-player 1.2s steps(1, end) infinite;
}

/* Forward attack animations from wrapper div down to the sprite */
[class*="animate-mage"] img,
[class*="animate-knight"] img {
    animation: inherit;
}

.dragon-idle img {
    animation: pixel-bob-dragon 1.2s steps(1, end) infinite 0.4s;
}

/* Forward attack animations from wrapper div down to the dragon sprite */
[class*="animate-dragon"] img {
    animation: inherit;
}

/* ============================================
   ROUND END — WALK-IN ANIMATION
   Add/remove .walk-in on the playerCharacterClass wrapper
   ============================================ */

@keyframes walk-in-slide {
    0% {
        transform: translateX(-60vw);
    }
    80% {
        transform: translateX(0px);
    }
    88% {
        transform: translateX(6px);
    } /* tiny overshoot */
    94% {
        transform: translateX(-3px);
    } /* settle back */
    100% {
        transform: translateX(0px);
    }
}

/* Pixel footstep bob — layered on the inner img via player-idle */
@keyframes walk-bob {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-5px);
    }
    100% {
        transform: translateY(0px);
    }
}

/* Applied to the playerCharacterClass wrapper div */
.walk-in {
    animation: walk-in-slide 5.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

/* While walking, override the idle bob with a faster walk bob on the sprite */
.walk-in img {
    animation: walk-bob 0.3s steps(1, end) infinite !important;
}

/* Once arrived, kill the walk bob and restore idle */
.walk-in-done img {
    animation: pixel-bob-player 1.2s steps(1, end) infinite;
}
</style>
