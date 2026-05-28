<script setup lang="ts">
defineProps<{
    selected?: boolean;
}>();
</script>
<template>
    <div
        class="w-23 h-23 flex items-center justify-center bg-[#0D1526] border-b-4 border-[#A855F7] group"
        :class="
            selected
                ? 'opacity-40 cursor-default border-[#3B0764]'
                : 'cursor-pointer hover:bg-[#A855F7] hover:border-[#0D1526]'
        "
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
