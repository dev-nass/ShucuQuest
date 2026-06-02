<script setup lang="ts">
import { ref, watch, computed } from "vue";
import PixelHeart from "./PixelHeartIcon.vue";

const props = defineProps({
    hp: {
        type: Number,
        default: 3,
    },
    maxHp: {
        type: Number,
        default: 5,
    },
    size: {
        type: Number,
        default: 6,
    },
    color: {
        type: String,
        default: "#e84040",
    },
    emptyColor: {
        type: String,
        default: "#444",
    },
});

const isShaking = ref(false);

/**
 * Number of heart slots = ceil(maxHp).
 * e.g. maxHp=5 → 5 hearts, maxHp=4.5 → 5 hearts (last starts as half when full)
 */
const heartSlots = computed(() => Math.ceil(props.maxHp));

/**
 * Each heart slot covers 1 full HP unit (index 1-based).
 * - remaining >= 1   → full
 * - remaining >= 0.5 → half  (handles all .5 damage increments)
 * - remaining <  0.5 → empty
 */
function getHeartState(index: number): "full" | "half" | "empty" {
    const remaining = props.hp - (index - 1);
    if (remaining >= 1) return "full";
    if (remaining >= 0.5) return "half";
    return "empty";
}

watch(
    () => props.hp,
    (newVal, oldVal) => {
        if (newVal < oldVal) {
            isShaking.value = true;
            setTimeout(() => (isShaking.value = false), 400);
        }
    },
);
</script>

<template>
    <div class="pixel-hearts" :class="{ shake: isShaking }">
        <div v-for="i in heartSlots" :key="i" class="heart-wrapper">
            <PixelHeart
                :state="getHeartState(i)"
                :size="size"
                :color="color"
                :emptyColor="emptyColor"
            />
        </div>
    </div>
</template>

<style scoped>
.pixel-hearts {
    display: flex;
    gap: 8px;
    align-items: center;
}

.heart-wrapper {
    display: flex;
    transition: transform 0.15s ease;
}

.shake {
    animation: hpShake 0.4s ease;
}

@keyframes hpShake {
    0% {
        transform: translateX(0);
    }
    20% {
        transform: translateX(-4px);
    }
    40% {
        transform: translateX(4px);
    }
    60% {
        transform: translateX(-3px);
    }
    80% {
        transform: translateX(3px);
    }
    100% {
        transform: translateX(0);
    }
}
</style>
