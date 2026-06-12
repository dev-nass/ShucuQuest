<script setup lang="ts">
type ButtonVariant = "primary" | "ghost" | "danger" | "teal";
type ButtonSize = "sm" | "md" | "lg";

interface Props {
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    fullWidth?: boolean;
}

withDefaults(defineProps<Props>(), {
    variant: "primary",
    size: "md",
    disabled: false,
    type: "button",
    fullWidth: false,
});

// Record<ButtonSize, string> means an object that MUST have
// exactly these four keys, each mapping to a string
// Use Record<Key, Value> as a lookup table/dictionary
// Like this instance, where we retrieve a specific design;
// based on the based size
const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-3.5 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
};

const variantClasses: Record<ButtonVariant, string> = {
    primary: [
        "text-slate-900 font-semibold",
        "bg-gradient-to-r from-purple-500 to-[#F0A8FC]",
        "shadow-[0_0_10px_1px_rgba(168,85,247,0.3)]",
        "hover:opacity-85 hover:shadow-[0_0_16px_3px_rgba(168,85,247,0.45)]",
        "disabled:bg-none disabled:bg-purple-950 disabled:text-purple-900 disabled:shadow-none",
    ].join(" "),

    ghost: [
        "bg-transparent",
        "border border-purple-500",
        "text-[#E9C8F5]",
        "hover:bg-purple-500/10 hover:border-[#F0A8FC] hover:text-[#F0A8FC]",
    ].join(" "),

    danger: [
        "bg-transparent",
        "border border-[#e84040]",
        "text-[#e84040]",
        "hover:bg-[#e84040]/10 hover:shadow-[0_0_10px_1px_rgba(232,64,64,0.25)]",
    ].join(" "),

    teal: [
        "bg-transparent",
        "border border-teal-400",
        "text-teal-400",
        "hover:bg-teal-400/10 hover:border-teal-200 hover:text-teal-200",
        "hover:shadow-[0_0_10px_1px_rgba(45,212,191,0.2)]",
    ].join(" "),
};
</script>

<template>
    <button
        :type="type"
        :disabled="disabled"
        :class="[
            // base
            'inline-flex items-center justify-center gap-1.5',
            'font-semibold whitespace-nowrap cursor-pointer',
            'transition-all duration-150',
            'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',
            // size
            sizeClasses[size],
            // variant
            variantClasses[variant],
            // full width
            fullWidth ? 'w-full' : '',
        ]"
    >
        <slot />
    </button>
</template>
