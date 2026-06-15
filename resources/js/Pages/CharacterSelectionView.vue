<script setup lang="ts">
import { ref } from "vue";

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
    }
}

const emit = defineEmits<{
    confirm: [character: Character];
}>();
</script>

<template>
    <div
        class="relative min-h-screen bg-[#0C0F1A] flex flex-col items-center justify-center px-6 py-12 overflow-hidden"
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
                background-size: 32px 32px;
            "
            aria-hidden="true"
        />

        <!-- Header -->
        <div class="relative z-10 text-center mb-10">
            <p
                class="font-pixel text-[9px] tracking-[3px] uppercase text-[#2DD4BF] mb-2"
            >
                Shucuquest
            </p>
            <h1
                class="font-pixel text-lg text-[#F0A8FC] leading-snug"
                style="text-shadow: 0 0 20px rgba(168, 85, 247, 0.6)"
            >
                Choose Your Champion
            </h1>
            <p class="font-pixel text-[8px] text-[#E9C8F5] opacity-70 mt-2">
                Select a character to begin your quest
            </p>
        </div>

        <!-- Divider -->
        <div
            class="relative z-10 w-16 h-px mb-10"
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
            class="relative z-10 flex flex-wrap justify-center gap-5"
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
                class="w-[180px] rounded-xl border-2 bg-[#0D1526] cursor-pointer transition-all duration-200 outline-none select-none"
                :class="
                    selectedId === char.id
                        ? 'border-[#F0A8FC] -translate-y-1'
                        : 'border-[#3B0764] hover:-translate-y-1 hover:border-[#A855F7]'
                "
                :style="
                    selectedId === char.id
                        ? 'box-shadow: 0 0 0 2px #A855F7, 0 0 30px 8px rgba(168,85,247,0.55), 0 0 60px 16px rgba(240,168,252,0.2);'
                        : ''
                "
                @click="selectCharacter(char.id)"
                @keydown.enter.prevent="selectCharacter(char.id)"
                @keydown.space.prevent="selectCharacter(char.id)"
                @mouseenter="
                    (e) => {
                        if (selectedId !== char.id) {
                            (e.currentTarget as HTMLElement).style.boxShadow =
                                '0 0 0 1px #A855F7, 0 0 18px 4px rgba(168,85,247,0.45), 0 0 40px 8px rgba(240,168,252,0.15)';
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
                    class="relative w-full h-40 flex items-center justify-center border-b border-[#3B0764] overflow-hidden transition-colors duration-200 rounded-t-xl"
                    :class="
                        selectedId === char.id
                            ? 'bg-[rgba(168,85,247,0.13)]'
                            : 'bg-transparent hover:bg-[rgba(168,85,247,0.08)]'
                    "
                >
                    <!-- Selected checkmark badge -->
                    <div
                        v-if="selectedId === char.id"
                        class="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#A855F7] flex items-center justify-center z-10"
                        aria-hidden="true"
                    >
                        <svg
                            viewBox="0 0 16 16"
                            class="w-3 h-3 stroke-white fill-none"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <polyline points="3,8 6,12 13,4" />
                        </svg>
                    </div>

                    <!-- Radial glow behind sprite -->
                    <div
                        class="absolute inset-0 transition-opacity duration-200 pointer-events-none"
                        :style="
                            selectedId === char.id
                                ? 'background: radial-gradient(ellipse at 50% 60%, rgba(168,85,247,0.22) 0%, transparent 70%); opacity: 1;'
                                : 'background: radial-gradient(ellipse at 50% 60%, rgba(168,85,247,0.22) 0%, transparent 70%); opacity: 0;'
                        "
                        aria-hidden="true"
                    />

                    <!-- Knight sprite -->
                    <img
                        v-if="char.id === 'knight'"
                        src="/public/images/knight.png"
                    />

                    <img
                        v-if="char.id === 'mage'"
                        src="/public/images/mage.png"
                    />

                    <!-- Rogue sprite -->
                    <svg
                        v-if="char.id === 'rogue'"
                        class="w-20 h-20 relative z-10"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        style="image-rendering: pixelated"
                    >
                        <rect x="5" y="1" width="6" height="5" fill="#3B0764" />
                        <rect x="6" y="2" width="4" height="3" fill="#E9C8F5" />
                        <rect x="6" y="3" width="1" height="1" fill="#0C0F1A" />
                        <rect x="9" y="3" width="1" height="1" fill="#0C0F1A" />
                        <rect x="4" y="1" width="2" height="2" fill="#0C0F1A" />
                        <rect x="5" y="5" width="6" height="7" fill="#1a0a2e" />
                        <rect x="5" y="5" width="6" height="1" fill="#3B0764" />
                        <rect x="3" y="6" width="2" height="5" fill="#1a0a2e" />
                        <rect
                            x="11"
                            y="6"
                            width="2"
                            height="5"
                            fill="#1a0a2e"
                        />
                        <rect x="2" y="5" width="1" height="4" fill="#A855F7" />
                        <rect
                            x="13"
                            y="5"
                            width="1"
                            height="4"
                            fill="#A855F7"
                        />
                        <rect
                            x="5"
                            y="12"
                            width="2"
                            height="3"
                            fill="#1a0a2e"
                        />
                        <rect
                            x="9"
                            y="12"
                            width="2"
                            height="3"
                            fill="#1a0a2e"
                        />
                        <rect
                            x="7"
                            y="7"
                            width="2"
                            height="2"
                            fill="#A855F7"
                            opacity="0.4"
                        />
                        <rect
                            x="6"
                            y="9"
                            width="1"
                            height="1"
                            fill="#2DD4BF"
                            opacity="0.7"
                        />
                        <rect
                            x="9"
                            y="9"
                            width="1"
                            height="1"
                            fill="#2DD4BF"
                            opacity="0.7"
                        />
                    </svg>
                </div>

                <!-- Card body -->
                <div class="px-3.5 pt-3.5 pb-4">
                    <p
                        class="font-pixel text-[10px] text-[#F0A8FC] mb-1.5 tracking-wide"
                    >
                        {{ char.name }}
                    </p>
                    <p
                        class="font-pixel text-[7px] text-[#2DD4BF] tracking-[2px] uppercase mb-3"
                    >
                        {{ char.class }}
                    </p>

                    <div class="flex flex-col gap-1.5">
                        <div
                            v-for="stat in char.stats"
                            :key="stat.label"
                            class="flex items-center gap-1.5"
                        >
                            <span
                                class="font-pixel text-[6px] text-[#E9C8F5] w-7 flex-shrink-0 tracking-wide"
                            >
                                {{ stat.label }}
                            </span>
                            <div
                                class="flex-1 h-[5px] bg-[#1a0a2e] rounded-sm overflow-hidden"
                            >
                                <div
                                    class="h-full rounded-sm transition-colors duration-200"
                                    :class="
                                        selectedId === char.id
                                            ? 'bg-[#F0A8FC]'
                                            : 'bg-[#9333EA] group-hover:bg-[#A855F7]'
                                    "
                                    :style="{ width: `${stat.value}%` }"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="relative z-10 text-center mt-8">
            <button
                class="font-pixel text-[9px] rounded-lg px-7 py-3.5 tracking-wide transition-all duration-150"
                :class="
                    selectedId
                        ? 'text-[#0F172A] cursor-pointer hover:scale-105 active:scale-95'
                        : 'text-[#0F172A] opacity-35 cursor-not-allowed'
                "
                :style="
                    selectedId
                        ? 'background: linear-gradient(135deg, #A855F7, #F0A8FC); box-shadow: 0 0 16px rgba(168,85,247,0.5);'
                        : 'background: linear-gradient(135deg, #A855F7, #F0A8FC);'
                "
                :disabled="!selectedId"
                @click="confirmSelection"
            >
                Begin Quest →
            </button>

            <p
                v-if="!selectedId"
                class="font-pixel text-[7px] text-[#E9C8F5] opacity-50 mt-2.5 tracking-wide"
            >
                ← choose your champion
            </p>
        </div>
    </div>
</template>
