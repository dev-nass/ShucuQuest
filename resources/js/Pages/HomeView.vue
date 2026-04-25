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
            <div class="flex items-center gap-4">
                <button
                    class="text-[#0F172A] text-sm font-bold tracking-widest px-6 py-3 hover:opacity-90 transition-opacity font-pixel"
                    style="
                        background: linear-gradient(to right, #a855f7, #f0a8fc);
                        box-shadow: 0 0 16px #a855f7, 0 0 10px #f0a8fc;
                    "
                >
                    BATTLE NOW
                </button>
                <button
                    class="text-[#A855F7] text-sm tracking-widest px-6 py-3 hover:opacity-90 transition-opacity font-pixel"
                    style="background-color: #0c0f1a; border: 1px solid #a855f7"
                >
                    VIEW TRAILER
                </button>
            </div>
        </section>

        <!-- Spell Casting Section -->
        <section class="bg-[#0A111E] py-24 px-6">
            <div class="max-w-7xl mx-auto grid grid-cols-5 gap-16 items-center">

                <!-- Column 1: Spell Casting Interface (40%) -->
                <div class="col-span-2 flex flex-col gap-6 items-center">

                    <!-- Letter Grid using CSS Grid -->
                    <div class="grid gap-2" style="grid-template-columns: repeat(4, 5rem)">
                        <!-- S -->
                        <div class="w-20 h-20 flex items-center justify-center bg-[#0D1526] border-b-2 border-[#A855F7]">
                            <span class="text-[#A855F7] text-4xl font-pixel">S</span>
                        </div>
                        <!-- P -->
                        <div class="w-20 h-20 flex items-center justify-center bg-[#0D1526] border-b-2 border-[#A855F7]">
                            <span class="text-[#A855F7] text-4xl font-pixel">P</span>
                        </div>
                        <!-- E -->
                        <div class="w-20 h-20 flex items-center justify-center bg-[#0D1526] border-b-2 border-[#A855F7]">
                            <span class="text-[#A855F7] text-4xl font-pixel">E</span>
                        </div>
                        <!-- L -->
                        <div class="w-20 h-20 flex items-center justify-center bg-[#0D1526] border-b-2 border-[#A855F7]">
                            <span class="text-[#A855F7] text-4xl font-pixel">L</span>
                        </div>
                        <!-- L (row 2) -->
                        <div class="w-20 h-20 flex items-center justify-center bg-[#0D1526] border-b-2 border-[#A855F7]">
                            <span class="text-[#A855F7] text-4xl font-pixel">L</span>
                        </div>
                        <!-- CASTING spans remaining 3 columns -->
                        <div
                            class="h-20 flex items-center justify-center col-span-3"
                            style="background: #0D2B28; border: 1.5px solid #2DD4BF; box-shadow: 0 0 10px #2DD4BF40"
                        >
                            <span class="text-[#99F6E4] text-sm tracking-widest font-pixel">CASTING...</span>
                        </div>
                        <!-- Bottom glow bar spanning all 4 columns -->
                        <div class="col-span-4 h-1" style="background: #A855F7; box-shadow: 0 0 10px #A855F7, 0 0 20px #A855F780"></div>
                    </div>

                    <!-- Progression Bar -->
                    <div class="flex flex-col gap-2 w-full">
                        <div class="w-full h-2 bg-[#030509] overflow-hidden">
                            <div class="h-full w-4/5" style="background: #2DD4BF; box-shadow: 0 0 8px #2DD4BF"></div>
                        </div>
                        <span class="text-xs tracking-widest bg-clip-text text-transparent" style="background-image: linear-gradient(to right, #a855f7, #f0a8fc)">SPELL IDENTIFIED: ARCANE BOLT</span>
                    </div>
                </div>

                <!-- Column 2: Marketing Copy (60%) -->
                <div class="col-span-3 flex flex-col gap-8 items-center text-center">

                    <!-- Headline -->
                    <h2
                        class="text-4xl font-bold leading-tight uppercase font-pixel bg-clip-text text-transparent"
                        style="background-image: linear-gradient(to bottom, #F0ABFC 50%, #A855F7 50%)"
                    >
                        YOUR VOCABULARY<br>IS YOUR WEAPON.
                    </h2>

                    <!-- Body Text -->
                    <p class="text-slate-400 text-sm leading-relaxed max-w-lg">
                        In ShucuQuest, typing is fighting. String together complex words to launch devastating spells.
                        Longer words yield higher critical hits, but time is of the essence as the monsters strike back in real-time.
                    </p>

                    <!-- Feature Icons -->
                    <div class="flex flex-col gap-4">
                        <div class="flex items-center gap-3">
                            <span class="text-[#F0ABFC] text-lg">✦✦✦✦</span>
                            <span class="text-[#F0ABFC] text-xs tracking-widest font-pixel">DYNAMIC SPELL CONSTRUCTION</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>
