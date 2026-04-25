<script lang="ts"></script>

<template>
    <div class="min-h-screen bg-[#0C0F1A]">
        <!-- Navbar gradient border wrapper -->
        <div class="max-w-7xl mx-auto">
            <nav class="bg-[#0C0F1A] px-6 py-4 flex items-center">
                <!-- Logo + Title -->
                <div class="flex items-center gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-8 h-8 text-[#A855F7]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            d="M7 6h10a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-2a5 5 0 0 1 5-5zm1 4v2H6v2h2v-2h2v-2H8zm9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-2-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                        />
                    </svg>
                    <span
                        class="text-[#A855F7] font-bold tracking-widest text-lg font-pixel"
                        style="letter-spacing: 0.2em"
                        >SHUCUQUEST</span
                    >
                </div>

                <!-- Nav Links -->
                <div class="flex items-center gap-6 flex-1 justify-center">
                    <a
                        href="#"
                        class="text-[#F3E8FF] text-sm tracking-widest hover:text-[#A855F7] transition-colors"
                        >MODES</a
                    >
                    <a
                        href="#"
                        class="text-[#F3E8FF] text-sm tracking-widest hover:text-[#A855F7] transition-colors"
                        >RAIDS</a
                    >
                    <a
                        href="#"
                        class="text-[#F3E8FF] text-sm tracking-widest hover:text-[#A855F7] transition-colors"
                        >GUILDS</a
                    >
                </div>

                <!-- Button -->
                <button
                    class="text-[#0F172A] text-sm font-bold px-5 py-2 tracking-widest hover:opacity-90 transition-opacity font-pixel"
                    style="
                        background: linear-gradient(to right, #a855f7, #f0a8fc);
                        box-shadow: 0 0 16px #a855f7, 0 0 10px #f0a8fc;
                    "
                >
                    PLAY NOW
                </button>
            </nav>
        </div>

        <!-- Hero -->
        <section
            class="flex flex-col items-center justify-center text-center px-4 pt-24 pb-16"
        >
            <!-- Level badge -->
            <div
                class="text-[#F0A8FC] text-xs tracking-widest px-4 py-1 mb-8 rounded"
                style="
                    border: 2px solid #f0a8fc;
                    box-shadow: inset 0 0 6px #f0a8fc30;
                "
            >
                LEVEL 01: THE AWAKENING
            </div>

            <!-- Title -->
            <div class="relative mb-8">
                <!-- Glow background -->
                <div
                    class="absolute -inset-16 rounded-full blur-3xl opacity-30"
                    style="
                        background: radial-gradient(
                            ellipse,
                            #a855f7,
                            #f0a8fc,
                            transparent 70%
                        );
                    "
                ></div>
                <h1
                    class="relative text-9xl font-bold tracking-widest uppercase bg-clip-text text-transparent font-pixel"
                    style="
                        background-image: linear-gradient(
                            to right,
                            #a855f7,
                            #f0a8fc
                        );
                        letter-spacing: 0.1em;
                    "
                >
                    SHUCUQUEST
                </h1>
            </div>

            <!-- Description -->
            <p
                class="text-[#E9C8F5] text-sm tracking-wide max-w-xl leading-relaxed mb-8"
            >
                Master the ancient lexicon. Cast verbal spells. Defeat the
                pixelated titans in the world's first
                <span class="text-[#99F6E4] font-bold"
                    >Strategic Spelling RPG</span
                >.
            </p>

            <!-- Buttons -->
            <div class="flex items-center">
                <button
                    class="text-[#0F172A] text-sm font-bold tracking-widest px-6 py-3 hover:opacity-90 transition-opacity font-pixel"
                    style="
                        background: linear-gradient(to right, #a855f7, #f0a8fc);
                        box-shadow: 0 0 16px #a855f7, 0 0 10px #f0a8fc;
                    "
                >
                    BATTLE NOW
                </button>
                <div class="w-px h-10 bg-[#0F172A]"></div>
                <button
                    class="text-[#A855F7] text-sm tracking-widest px-6 py-3 hover:opacity-90 transition-opacity font-pixel"
                    style="background-color: #0c0f1a; border: 1px solid #a855f7"
                >
                    VIEW TRAILER
                </button>
            </div>
        </section>
    </div>
</template>
