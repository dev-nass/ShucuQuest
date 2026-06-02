<script setup lang="ts">
import { computed, CSSProperties } from "vue";

const props = defineProps({
    state: {
        type: String,
        default: "full",
        validator: (v: string) => ["full", "half", "empty"].includes(v),
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

// 8x7 pixel heart grid — 1 = filled pixel, 0 = transparent
const GRID = [
    [0, 0, 1, 1, 0, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0],
];

const cells = computed(() =>
    GRID.flatMap((row, _r) => row.map((filled, c) => ({ filled, col: c }))),
);

const gridStyle = computed<CSSProperties>(() => ({
    display: "grid",
    gridTemplateColumns: `repeat(8, ${props.size}px)`,
    gridTemplateRows: `repeat(7, ${props.size}px)`,
    imageRendering: "pixelated",
    gap: "0",
}));

/**
 * Half state: left 4 columns colored, right 4 transparent.
 * This maps cleanly to .5 HP increments since each heart = 1 HP.
 */
function cellStyle(cell: {
    filled: number;
    col: number;
}): Record<string, string> {
    if (!cell.filled) {
        return {
            width: props.size + "px",
            height: props.size + "px",
            background: "transparent",
        };
    }

    let bg: string;

    if (props.state === "full") {
        bg = props.color;
    } else if (props.state === "half") {
        // left half = colored, right half = transparent (not empty color)
        bg = cell.col < 4 ? props.color : props.emptyColor;
    } else {
        bg = props.emptyColor;
    }

    return {
        width: props.size + "px",
        height: props.size + "px",
        background: bg,
        transition: "background 0.2s ease",
    };
}
</script>

<template>
    <div class="pixel-heart" :style="gridStyle">
        <div v-for="(cell, idx) in cells" :key="idx" :style="cellStyle(cell)" />
    </div>
</template>
