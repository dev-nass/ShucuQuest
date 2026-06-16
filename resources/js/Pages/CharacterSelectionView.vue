<script setup lang="ts">
import { useGameStates } from "@/stores/useGameStates";

import { router } from "@inertiajs/vue3";
import { ref } from "vue";

const { selectedChar } = useGameStates();

interface CharacterStat {
    label: string;
    value: number;
}

interface Character {
    id: string;
    name: string;
    class: string;
    stats: CharacterStat[];
}

// TODO: Update this and make dynamic from DB
const characters: Character[] = [
    {
        id: "knight",
        name: "Sir Aldric",
        class: "Knight",
        stats: [
            { label: "ATK", value: 55 },
            { label: "DEF", value: 90 },
            { label: "SPD", value: 40 },
            { label: "MGC", value: 20 },
        ],
    },
    {
        id: "mage",
        name: "Lyra",
        class: "Mage",
        stats: [
            { label: "ATK", value: 70 },
            { label: "DEF", value: 30 },
            { label: "SPD", value: 60 },
            { label: "MGC", value: 95 },
        ],
    },
    {
        id: "rogue",
        name: "Zyx",
        class: "Rogue",
        stats: [
            { label: "ATK", value: 80 },
            { label: "DEF", value: 45 },
            { label: "SPD", value: 95 },
            { label: "MGC", value: 35 },
        ],
    },
];

const selectedId = ref<string | null>(null);

function selectCharacter(id: string) {
    selectedId.value = id;
}

function confirmSelection() {
    if (!selectedId.value) return;
    const char = characters.find((c) => c.id === selectedId.value);
    if (char) {
        emit("confirm", char);
        selectedChar.value = selectedId.value;
        router.visit("/battle");
    }
}

const emit = defineEmits<{
    confirm: [character: Character];
}>();
</script>

<template>
    <div
        class="relative min-h-screen w-full bg-[#0C0F1A] flex flex-col items-center justify-center px-8 py-16 overflow-hidden"
    >
        <!-- Pixel grid background -->
        <div
            class="pointer-events-none absolute inset-0"
            style="
                background-image:
                    linear-gradient(
                        rgba(168, 85, 247, 0.04) 1px,
                        transparent 1px
                    ),
                    linear-gradient(
                        90deg,
                        rgba(168, 85, 247, 0.04) 1px,
                        transparent 1px
                    );
                background-size: 40px 40px;
            "
            aria-hidden="true"
        />

        <!-- Ambient corner glows -->
        <div
            class="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20"
            style="
                background: radial-gradient(
                    circle,
                    #a855f7 0%,
                    transparent 70%
                );
            "
            aria-hidden="true"
        />
        <div
            class="pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10"
            style="
                background: radial-gradient(
                    circle,
                    #f0a8fc 0%,
                    transparent 70%
                );
            "
            aria-hidden="true"
        />

        <!-- Header -->
        <div class="relative z-10 text-center mb-4">
            <p
                class="font-pixel text-[10px] tracking-[4px] uppercase text-[#2DD4BF] mb-4"
            >
                Shucuquest
            </p>
            <h1
                class="font-pixel text-3xl text-[#F0A8FC] leading-relaxed"
                style="text-shadow: 0 0 32px rgba(168, 85, 247, 0.7)"
            >
                Choose Your Champion
            </h1>
            <p
                class="font-pixel text-[9px] text-[#E9C8F5] opacity-60 mt-4 tracking-widest"
            >
                Your choice defines your fate
            </p>
        </div>

        <!-- Divider -->
        <div
            class="relative z-10 w-32 h-px my-10"
            style="
                background: linear-gradient(
                    90deg,
                    transparent,
                    #a855f7,
                    transparent
                );
            "
            aria-hidden="true"
        />

        <!-- Cards -->
        <div
            class="relative z-10 flex flex-wrap justify-center gap-8"
            role="radiogroup"
            aria-label="Character selection"
        >
            <div
                v-for="char in characters"
                :key="char.id"
                role="radio"
                :aria-checked="selectedId === char.id"
                :aria-label="`${char.name}, ${char.class}`"
                tabindex="0"
                class="w-[260px] rounded-2xl border-2 bg-[#0D1526] cursor-pointer transition-all duration-200 outline-none select-none"
                :class="
                    selectedId === char.id
                        ? 'border-[#F0A8FC] -translate-y-2'
                        : 'border-[#3B0764] hover:-translate-y-2 hover:border-[#A855F7]'
                "
                :style="
                    selectedId === char.id
                        ? 'box-shadow: 0 0 0 2px #A855F7, 0 0 40px 10px rgba(168,85,247,0.55), 0 0 80px 20px rgba(240,168,252,0.18);'
                        : ''
                "
                @click="selectCharacter(char.id)"
                @keydown.enter.prevent="selectCharacter(char.id)"
                @keydown.space.prevent="selectCharacter(char.id)"
                @mouseenter="
                    (e) => {
                        if (selectedId !== char.id) {
                            (e.currentTarget as HTMLElement).style.boxShadow =
                                '0 0 0 1px #A855F7, 0 0 24px 6px rgba(168,85,247,0.45), 0 0 50px 10px rgba(240,168,252,0.12)';
                        }
                    }
                "
                @mouseleave="
                    (e) => {
                        if (selectedId !== char.id) {
                            (e.currentTarget as HTMLElement).style.boxShadow =
                                '';
                        }
                    }
                "
            >
                <!-- Portrait area -->
                <div
                    class="relative w-full h-64 flex items-center justify-center border-b border-[#3B0764] overflow-hidden transition-colors duration-200 rounded-t-2xl"
                    :class="
                        selectedId === char.id
                            ? 'bg-[rgba(168,85,247,0.13)]'
                            : 'bg-transparent'
                    "
                >
                    <!-- Selected checkmark badge -->
                    <div
                        v-if="selectedId === char.id"
                        class="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#A855F7] flex items-center justify-center z-10"
                        aria-hidden="true"
                    >
                        <svg
                            viewBox="0 0 16 16"
                            class="w-4 h-4 stroke-white fill-none"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <polyline points="3,8 6,12 13,4" />
                        </svg>
                    </div>

                    <!-- Radial glow behind sprite -->
                    <div
                        class="absolute inset-0 pointer-events-none transition-opacity duration-200"
                        :style="
                            selectedId === char.id
                                ? 'background: radial-gradient(ellipse at 50% 65%, rgba(168,85,247,0.28) 0%, transparent 68%); opacity: 1;'
                                : 'background: radial-gradient(ellipse at 50% 65%, rgba(168,85,247,0.22) 0%, transparent 68%); opacity: 0;'
                        "
                        aria-hidden="true"
                    />

                    <!-- Knight image -->
                    <img
                        v-if="char.id === 'knight'"
                        src="/public/images/knight.png"
                        class="relative z-10 h-48 w-auto object-contain"
                        style="image-rendering: pixelated"
                        :alt="`${char.name} sprite`"
                    />

                    <!-- Mage image -->
                    <img
                        v-if="char.id === 'mage'"
                        src="/public/images/mage.png"
                        class="relative z-10 h-48 w-auto object-contain"
                        style="image-rendering: pixelated"
                        :alt="`${char.name} sprite`"
                    />

                    <img
                        v-if="char.id === 'rogue'"
                        src="/public/images/rogue.png"
                        class="relative z-10 h-48 w-auto object-contain"
                        style="image-rendering: pixelated"
                        :alt="`${char.name} sprite`"
                    />
                </div>

                <!-- Card body -->
                <div class="px-5 pt-5 pb-6">
                    <div class="flex items-baseline justify-between mb-1">
                        <p
                            class="font-pixel text-[13px] text-[#F0A8FC] tracking-wide"
                        >
                            {{ char.name }}
                        </p>
                        <span
                            class="font-pixel text-[7px] tracking-[2px] uppercase px-2 py-1 rounded border"
                            :class="
                                selectedId === char.id
                                    ? 'text-[#F0A8FC] border-[#A855F7]'
                                    : 'text-[#2DD4BF] border-[#2DD4BF] opacity-70'
                            "
                        >
                            {{ char.class }}
                        </span>
                    </div>

                    <!-- Divider -->
                    <div
                        class="w-full h-px my-4"
                        style="
                            background: linear-gradient(
                                90deg,
                                #3b0764,
                                transparent
                            );
                        "
                        aria-hidden="true"
                    />

                    <div class="flex flex-col gap-3">
                        <div
                            v-for="stat in char.stats"
                            :key="stat.label"
                            class="flex items-center gap-3"
                        >
                            <span
                                class="font-pixel text-[7px] text-[#E9C8F5] w-8 flex-shrink-0 tracking-wide"
                            >
                                {{ stat.label }}
                            </span>
                            <div
                                class="flex-1 h-[6px] bg-[#1a0a2e] rounded-sm overflow-hidden"
                            >
                                <div
                                    class="h-full rounded-sm transition-colors duration-200"
                                    :class="
                                        selectedId === char.id
                                            ? 'bg-[#F0A8FC]'
                                            : 'bg-[#9333EA]'
                                    "
                                    :style="{ width: `${stat.value}%` }"
                                />
                            </div>
                            <span
                                class="font-pixel text-[6px] text-[#E9C8F5] opacity-40 w-6 text-right flex-shrink-0"
                            >
                                {{ stat.value }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div
            class="relative z-10 text-center mt-14 flex flex-col items-center gap-4"
        >
            <button
                class="font-pixel text-[12px] rounded-xl px-12 py-5 tracking-widest transition-all duration-150"
                :class="
                    selectedId
                        ? 'text-[#0F172A] cursor-pointer hover:scale-105 active:scale-95'
                        : 'text-[#0F172A] opacity-30 cursor-not-allowed'
                "
                :style="
                    selectedId
                        ? 'background: linear-gradient(135deg, #A855F7, #F0A8FC); box-shadow: 0 0 24px rgba(168,85,247,0.55);'
                        : 'background: linear-gradient(135deg, #A855F7, #F0A8FC);'
                "
                :disabled="!selectedId"
                @click="confirmSelection"
            >
                Begin Quest →
            </button>

            <p
                class="font-pixel text-[8px] text-[#E9C8F5] opacity-40 tracking-widest"
            >
                {{
                    selectedId
                        ? `${characters.find((c) => c.id === selectedId)?.name} is ready`
                        : "← choose your champion"
                }}
            </p>
        </div>
    </div>
</template>
