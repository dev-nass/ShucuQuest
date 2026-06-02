<script setup lang="ts">
defineProps({
    open: {
        type: Boolean,
        default: false,
    },
});

// So close: [] means the close event fires with zero parameters.
// If it passed a value, you'd write close: [reason: string].
defineEmits<{
    close: [];
    confirm: [];
}>();
</script>
<template>
    <Teleport to="body">
        <Transition
            enter-active-class="transition-opacity duration-300 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-if="open"
                class="fixed inset-0 bg-black/60 z-50"
                @click.self="$emit('close')"
            />
        </Transition>

        <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
            <div
                v-if="open"
                class="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center sm:p-0"
                role="dialog"
                aria-modal="true"
                aria-labelledby="dialog-title"
            >
                <div
                    class="relative w-full sm:max-w-lg rounded-lg overflow-hidden shadow-xl"
                    style="
                        background-color: #0d1526;
                        border: 1px solid #a855f7;
                        box-shadow: 0 0 24px 2px #a855f740;
                    "
                >
                    <!-- Body -->
                    <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <!-- Icon -->
                            <div
                                class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full sm:mx-0 sm:size-10"
                                style="background-color: #e8404020"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    aria-hidden="true"
                                    class="size-6"
                                    style="color: #e84040"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                                    />
                                </svg>
                            </div>

                            <!-- Text -->
                            <div
                                class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                            >
                                <h3
                                    id="dialog-title"
                                    class="text-base font-semibold"
                                    style="color: #e9c8f5"
                                >
                                    Deactivate account
                                </h3>
                                <div class="mt-2">
                                    <p class="text-sm" style="color: #e9c8f5aa">
                                        Are you sure you want to deactivate your
                                        account? All of your data will be
                                        permanently removed. This action cannot
                                        be undone.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div
                        class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                        style="background-color: #0c0f1a"
                    >
                        <!-- Confirm -->
                        <button
                            type="button"
                            class="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold sm:ml-3 sm:w-auto transition-opacity hover:opacity-80"
                            style="
                                background: linear-gradient(
                                    to right,
                                    #a855f7,
                                    #f0a8fc
                                );
                                color: #0f172a;
                            "
                            @click="$emit('confirm')"
                        >
                            Deactivate
                        </button>

                        <!-- Cancel -->
                        <button
                            type="button"
                            class="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold sm:mt-0 sm:w-auto transition-colors hover:opacity-80"
                            style="
                                background-color: transparent;
                                border: 1px solid #a855f7;
                                color: #e9c8f5;
                            "
                            @click="$emit('close')"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>
