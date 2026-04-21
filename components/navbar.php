<nav x-data="{ open: false }" class="fixed top-0 left-0 w-full z-50 bg-[#050505] border-b border-white/10">
    <div class="w-full px-10 h-16 flex items-center justify-between">
        <div class="text-xl font-bold tracking-tighter uppercase">
            AETHER<span class="text-[#FF4D00]">.</span>STUDIO
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-white/50">
            <a href="#work" class="hover:text-white transition-colors">Work</a>
            <a href="#services" class="hover:text-white transition-colors">Services</a>
            <a href="#process" class="hover:text-white transition-colors">Process</a>
            <a href="#about" class="hover:text-white transition-colors">About</a>
            <button class="px-6 py-2 bg-white text-black text-[10px] font-bold tracking-widest uppercase hover:bg-[#FF4D00] hover:text-white transition-all">
                Contact
            </button>
        </div>

        <!-- Mobile Toggle -->
        <button @click="open = !open" class="md:hidden text-white">
            <svg x-show="!open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            <svg x-show="open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
    </div>

    <!-- Mobile Menu -->
    <div x-show="open" 
         x-transition:enter="transition ease-out duration-200"
         x-transition:enter-start="opacity-0 -translate-y-4"
         x-transition:enter-end="opacity-100 translate-y-0"
         class="md:hidden bg-[#050505] border-b border-white/10 p-6 flex flex-col gap-6 uppercase tracking-widest text-[11px] font-bold text-white/50">
        <a href="#work" @click="open = false" class="hover:text-white">Work</a>
        <a href="#services" @click="open = false" class="hover:text-white">Services</a>
        <a href="#process" @click="open = false" class="hover:text-white">Process</a>
        <a href="#about" @click="open = false" class="hover:text-white">About</a>
        <button class="w-full py-4 bg-white text-black text-[10px] font-bold tracking-widest uppercase">Contact</button>
    </div>
</nav>
