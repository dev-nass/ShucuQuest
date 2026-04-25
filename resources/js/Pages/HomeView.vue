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
            class="flex flex-col items-center justify-center text-center px-4 pt-40 pb-50"
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

        <!-- Bento Feature Grid Section -->
        <section class="bg-[#0F172A] py-24 px-6">
            <div class="max-w-7xl mx-auto flex flex-col gap-6">
                <!-- Section Header -->
                <h2
                    class="text-center text-white text-2xl font-pixel tracking-widest mb-4"
                    style="text-shadow: 0 2px 12px #0008"
                >
                    SYSTEM FEATURES
                </h2>

                <!-- Row 1 -->
                <div class="flex gap-5" style="height: 320px">
                    <!-- Box A: Co-op Multiplayer (66%) -->
                    <div
                        class="relative rounded-lg overflow-hidden border border-slate-800 flex-[2] hover:brightness-110 hover:shadow-[0_0_20px_#A855F740] transition-all cursor-pointer"
                        style="
                            background: linear-gradient(
                                135deg,
                                #0d1b3e 0%,
                                #1a2a4a 50%,
                                #0a1628 100%
                            );
                        "
                    >
                        <!-- Arena grid pattern -->
                        <div
                            class="absolute inset-0 opacity-10"
                            style="
                                background-image: linear-gradient(
                                        #2dd4bf22 1px,
                                        transparent 1px
                                    ),
                                    linear-gradient(
                                        90deg,
                                        #2dd4bf22 1px,
                                        transparent 1px
                                    );
                                background-size: 32px 32px;
                            "
                        ></div>
                        <!-- Bottom gradient overlay -->
                        <div
                            class="absolute inset-0"
                            style="
                                background: linear-gradient(
                                    to top,
                                    #0a1628ee 0%,
                                    transparent 60%
                                );
                            "
                        ></div>
                        <!-- Content -->
                        <div
                            class="absolute bottom-0 left-0 p-6 flex flex-col gap-2"
                        >
                            <span
                                class="text-[#2DD4BF] text-xs tracking-widest font-pixel"
                                >CO-OP MULTIPLAYER</span
                            >
                            <h3
                                class="text-white text-2xl font-pixel leading-tight"
                            >
                                REAL-TIME<br />TEAM BATTLES
                            </h3>
                        </div>
                    </div>

                    <!-- Box B: Boss Raids (33%) -->
                    <div
                        class="relative rounded-lg overflow-hidden border border-slate-800 flex-[1] bg-[#A855F7] hover:shadow-[0_0_20px_#A855F780] transition-all cursor-pointer flex flex-col items-center justify-center gap-4 p-6 text-center"
                    >
                        <!-- Scanline overlay -->
                        <div
                            class="absolute inset-0 pointer-events-none opacity-20"
                            style="
                                background: repeating-linear-gradient(
                                    0deg,
                                    transparent,
                                    transparent 2px,
                                    #000 2px,
                                    #000 4px
                                );
                            "
                        ></div>
                        <!-- Skull icon -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="relative w-12 h-12 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M12 2a7 7 0 0 1 7 7c0 2.6-1.4 4.9-3.5 6.2V17a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1.8A7 7 0 0 1 12 2zm-2 15h4v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1zm-1-6a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm4 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"
                            />
                        </svg>
                        <div class="relative flex flex-col gap-2">
                            <h3
                                class="text-white text-lg font-pixel leading-tight"
                            >
                                LEGENDARY<br />BOSS RAIDS
                            </h3>
                            <p class="text-white/80 text-xs tracking-wide">
                                JOIN 40+ PLAYERS TO TAKE DOWN SERVER-WIDE
                                TITANS.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Row 2 -->
                <div class="flex gap-5" style="height: 260px">
                    <!-- Box C: Character Customization (40%) -->
                    <div
                        class="relative rounded-lg border border-slate-800 flex-[2] bg-[#0D1526] hover:shadow-[0_0_20px_#F0ABFC40] transition-all cursor-pointer p-6 flex flex-col justify-between"
                        style="border-top: 2px solid #f0abfc"
                    >
                        <!-- Color swatches -->
                        <div class="flex gap-2">
                            <div class="w-6 h-6 rounded-sm bg-[#A855F7]"></div>
                            <div class="w-6 h-6 rounded-sm bg-[#6B21A8]"></div>
                            <div class="w-6 h-6 rounded-sm bg-[#2DD4BF]"></div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <h3
                                class="text-white text-base font-pixel leading-tight"
                            >
                                PIXEL-ART CHARACTER<br />CUSTOMIZATION
                            </h3>
                            <p class="text-slate-400 text-xs leading-relaxed">
                                Craft your unique digital avatar with millions
                                of loot combinations.
                            </p>
                        </div>
                    </div>

                    <!-- Box D: Global Leaderboards (60%) -->
                    <div
                        class="relative rounded-lg border border-slate-800 flex-[3] bg-[#080E1A] hover:shadow-[0_0_20px_#2DD4BF40] transition-all cursor-pointer p-6 flex flex-col justify-center overflow-hidden"
                    >
                        <!-- Ghosted background text -->
                        <span
                            class="absolute left-4 top-1/2 -translate-y-1/2 text-[10rem] font-pixel text-white/5 leading-none select-none"
                            >#01</span
                        >
                        <!-- Content -->
                        <div class="relative ml-auto w-3/5 flex flex-col gap-3">
                            <h3
                                class="text-white text-xl font-pixel leading-tight"
                            >
                                GLOBAL<br />LEADERBOARDS
                            </h3>
                            <p class="text-slate-400 text-xs leading-relaxed">
                                Climb the ranks and earn the title of Grand
                                Lexicon Mage.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-[#0A111E] py-24 px-6">
            <div class="max-w-7xl mx-auto grid grid-cols-6 gap-16 items-center">
                <!-- Column 1: Spell Casting Interface (40%) -->
                <div class="col-span-3 flex flex-col gap-6 items-center">
                    <!-- Letter Grid using CSS Grid -->
                    <div
                        class="grid gap-2"
                        style="grid-template-columns: repeat(4, 5.75rem)"
                    >
                        <!-- S -->
                        <div
                            class="w-23 h-23 flex items-center justify-center bg-[#0D1526] border-b-4 border-[#A855F7]"
                        >
                            <span class="text-[#A855F7] text-4xl font-pixel"
                                >S</span
                            >
                        </div>
                        <!-- P -->
                        <div
                            class="w-23 h-23 flex items-center justify-center bg-[#0D1526] border-b-4 border-[#A855F7]"
                        >
                            <span class="text-[#A855F7] text-4xl font-pixel"
                                >P</span
                            >
                        </div>
                        <!-- E -->
                        <div
                            class="w-23 h-23 flex items-center justify-center bg-[#0D1526] border-b-4 border-[#A855F7]"
                        >
                            <span class="text-[#A855F7] text-4xl font-pixel"
                                >E</span
                            >
                        </div>
                        <!-- L -->
                        <div
                            class="w-23 h-23 flex items-center justify-center bg-[#0D1526] border-b-4 border-[#A855F7]"
                        >
                            <span class="text-[#A855F7] text-4xl font-pixel"
                                >L</span
                            >
                        </div>
                        <!-- L (row 2) -->
                        <div
                            class="w-23 h-23 flex items-center justify-center bg-[#0D1526] border-b-4 border-[#A855F7]"
                        >
                            <span class="text-[#A855F7] text-4xl font-pixel"
                                >L</span
                            >
                        </div>
                        <!-- CASTING spans remaining 3 columns -->
                        <div
                            class="h-23 flex items-center justify-center col-span-3"
                            style="
                                background: #0d2b28;
                                border: 1.5px solid #2dd4bf;
                                box-shadow: 0 0 10px #2dd4bf40;
                            "
                        >
                            <span
                                class="text-[#99F6E4] text-sm tracking-widest font-pixel"
                                >CASTING...</span
                            >
                        </div>
                    </div>

                    <!-- Progression Bar -->
                    <div
                        class="flex flex-col"
                        style="width: calc(4 * 5.75rem + 3 * 0.5rem)"
                    >
                        <div
                            class="bg-[#0D1526] px-6 py-4 border border-[#1E2A45]"
                        >
                            <span
                                class="text-[#2DD4BF] text-sm tracking-widest font-pixel"
                                >SPELL IDENTIFIED:</span
                            >
                            <span
                                class="text-[#F0ABFC] text-sm tracking-widest font-pixel ml-2"
                                >ARCANE BOLT</span
                            >
                        </div>
                        <div class="w-full h-3 bg-[#030509] overflow-hidden">
                            <div
                                class="h-full w-4/5"
                                style="
                                    background: #2dd4bf;
                                    box-shadow: 0 0 8px #2dd4bf;
                                "
                            ></div>
                        </div>
                    </div>
                </div>

                <!-- Column 2: Marketing Copy (60%) -->
                <div class="col-span-3 flex flex-col gap-8">
                    <!-- Headline -->
                    <h2
                        class="text-6xl font-bold leading-tight uppercase font-pixel bg-clip-text text-transparent"
                        style="
                            background-image: linear-gradient(
                                to bottom,
                                #f0abfc 50%,
                                #a855f7 50%
                            );
                        "
                    >
                        YOUR VOCABULARY<br />IS YOUR WEAPON.
                    </h2>

                    <!-- Body Text -->
                    <p class="text-slate-400 text-sm leading-relaxed max-w-lg">
                        In ShucuQuest, typing is fighting. String together
                        complex words to launch devastating spells. Longer words
                        yield higher critical hits, but time is of the essence
                        as the monsters strike back in real-time.
                    </p>

                    <!-- Feature Icons -->
                    <div class="flex flex-col gap-4">
                        <div class="flex gap-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5 text-[#99F6E4]"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"
                                />
                            </svg>
                            <span
                                class="text-[#99F6E4] text-xs tracking-widest font-pixel"
                                >DYNAMIC SPELL CONSTRUCTION</span
                            >
                        </div>
                        <div class="flex items-center gap-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5 text-[#99F6E4]"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"
                                />
                            </svg>
                            <span
                                class="text-[#99F6E4] text-xs tracking-widest font-pixel"
                                >ELEMENTAL AFFILIATES</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Registration Card -->
        <section class="bg-[#0F172A] py-24 px-6">
            <div
                class="max-w-4xl mx-auto relative bg-black border border-slate-800 rounded-sm p-10 flex flex-col items-center gap-6"
            >
                <!-- Terminal metadata top-right -->
                <div
                    class="absolute top-4 right-5 flex flex-col items-end gap-1"
                >
                    <span class="text-slate-600 text-xs font-mono"
                        >SYS_AUTH_READY</span
                    >
                    <span class="text-slate-600 text-xs font-mono"
                        >CONNECTION_STABLE</span
                    >
                    <span class="text-slate-600 text-xs font-mono"
                        >PHASE_04</span
                    >
                </div>

                <!-- Heading -->
                <h2
                    class="text-white text-3xl font-pixel italic tracking-widest"
                >
                    JOIN THE QUEST
                </h2>

                <!-- Subtext -->
                <p
                    class="text-slate-400 text-sm text-center max-w-md leading-relaxed"
                >
                    Enter your email to receive a starter pack containing a
                    <span
                        class="font-bold bg-clip-text text-transparent"
                        style="
                            background-image: linear-gradient(
                                to right,
                                #a855f7,
                                #f0abfc
                            );
                        "
                        >Rare Pixel Blade</span
                    >
                    and 500 Gold.
                </p>

                <!-- Form -->
                <div class="flex w-full max-w-md flex-col sm:flex-row">
                    <input
                        type="email"
                        placeholder="USER@SHUCUQUEST.IO"
                        class="flex-1 bg-[#1E293B] text-slate-400 text-sm px-4 py-3 outline-none placeholder:text-slate-600 rounded-none"
                    />
                    <button
                        class="relative overflow-hidden bg-[#2DD4BF] text-[#0F172A] text-sm font-bold font-pixel tracking-widest px-6 py-3 hover:opacity-90 transition-opacity rounded-none"
                    >
                        <!-- Scanline overlay -->
                        <div
                            class="absolute inset-0 pointer-events-none opacity-10"
                            style="
                                background: repeating-linear-gradient(
                                    0deg,
                                    transparent,
                                    transparent 2px,
                                    #000 2px,
                                    #000 4px
                                );
                            "
                        ></div>
                        <span class="relative">REGISTER</span>
                    </button>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-[#0F172A] border-t border-slate-800 py-12 px-6">
            <div class="max-w-7xl mx-auto flex flex-col items-center gap-8">
                <!-- Row 1: Brand -->
                <span
                    class="text-lg font-pixel tracking-widest bg-clip-text text-transparent"
                    style="
                        background-image: linear-gradient(
                            to right,
                            #f0abfc,
                            #a855f7
                        );
                    "
                    >SHUCUQUEST PIXEL STUDIOS</span
                >

                <!-- Row 2: Nav links -->
                <div class="flex items-center gap-8">
                    <a
                        v-for="link in ['MODES', 'GUIDE', 'TEAMS', 'SUPPORT']"
                        :key="link"
                        href="#"
                        class="text-slate-500 text-sm tracking-widest uppercase hover:text-[#2DD4BF] transition-colors"
                        >{{ link }}</a
                    >
                </div>

                <!-- Row 3: Social icons -->
                <div class="flex items-center gap-6">
                    <!-- Controller -->
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6 text-[#A855F7] hover:text-[#F0ABFC] transition-colors cursor-pointer"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M7 6h10a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-2a5 5 0 0 1 5-5zm1 4v2H6v2h2v-2h2v-2H8zm9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-2-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                        />
                    </svg>
                    <!-- Chat/Discord -->
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6 text-[#A855F7] hover:text-[#F0ABFC] transition-colors cursor-pointer"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.054a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"
                        />
                    </svg>
                    <!-- Share/Social -->
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6 text-[#A855F7] hover:text-[#F0ABFC] transition-colors cursor-pointer"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81a3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 3c0 .24.04.47.09.7L8.04 9.81A2.99 2.99 0 0 0 6 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65a2.92 2.92 0 0 0 2.92 2.92 2.92 2.92 0 0 0 2.92-2.92 2.92 2.92 0 0 0-2.92-2.92z"
                        />
                    </svg>
                </div>
            </div>
        </footer>
    </div>
</template>
