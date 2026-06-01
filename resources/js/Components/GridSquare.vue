<script setup lang="ts">
defineProps<{
    selected?: boolean;
    animationIntensity?: string;
}>();
</script>

<template>
    <div
        class="w-20 h-20 flex items-center justify-center bg-[#0D1526] border-b-4 border-[#A855F7] group"
        :class="[
            selected
                ? 'opacity-40 cursor-default border-[#3B0764]'
                : 'cursor-pointer hover:bg-[#A855F7] hover:border-[#0D1526]',
            !selected && animationIntensity,
        ]"
    >
        <span
            class="text-4xl font-pixel"
            :class="
                selected
                    ? 'text-[#3B0764]'
                    : 'text-[#A855F7] group-hover:text-[#0D1526]'
            "
        >
            <slot />
        </span>
    </div>
</template>

<style scoped>
@keyframes glow-weak {
    0%,
    100% {
        box-shadow:
            0 0 4px #a855f7,
            0 0 8px #a855f7;
    }
    50% {
        box-shadow:
            0 0 8px #a855f7,
            0 0 16px #a855f7,
            0 0 24px #c084fc;
    }
}
@keyframes glow-medium {
    0%,
    100% {
        box-shadow:
            0 0 6px #a855f7,
            0 0 12px #a855f7,
            0 0 20px #9333ea;
    }
    50% {
        box-shadow:
            0 0 12px #c084fc,
            0 0 24px #a855f7,
            0 0 40px #9333ea,
            0 0 60px #7c3aed;
    }
}
@keyframes glow-strong {
    0%,
    100% {
        box-shadow:
            0 0 8px #c084fc,
            0 0 18px #a855f7,
            0 0 30px #9333ea,
            0 0 50px #7c3aed;
    }
    50% {
        box-shadow:
            0 0 16px #e9d5ff,
            0 0 32px #c084fc,
            0 0 55px #a855f7,
            0 0 80px #7c3aed,
            0 0 100px #6d28d9;
    }
}
@keyframes glow-intense {
    0%,
    100% {
        box-shadow:
            0 0 10px #f0abfc,
            0 0 22px #e879f9,
            0 0 40px #c026d3,
            0 0 60px #9333ea;
        transform: scale(1);
    }
    50% {
        box-shadow:
            0 0 20px #fde8ff,
            0 0 40px #f0abfc,
            0 0 70px #e879f9,
            0 0 100px #c026d3;
        transform: scale(1.08);
    }
}

.glow-weak {
    animation: glow-weak 2.4s ease-in-out infinite;
}
.glow-medium {
    animation: glow-medium 1.8s ease-in-out infinite;
}
.glow-strong {
    animation: glow-strong 1.2s ease-in-out infinite;
}
.glow-intense {
    animation: glow-intense 0.8s ease-in-out infinite;
}
</style>
