<section id="work" class="bg-[#050505]">
    <div class="grid md:grid-cols-2">
        <?php foreach ($projects as $project): ?>
        <div class="group relative h-[600px] border-b border-white/10 md:even:border-l border-white/10 overflow-hidden cursor-pointer" data-aos="fade-up">
            <div class="absolute inset-0 z-0">
                <img src="<?php echo $project['image']; ?>" alt="<?php echo $project['title']; ?>" class="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            </div>

            <div class="absolute bottom-12 left-12 z-20 transition-transform group-hover:translate-x-4 duration-500">
                <div class="text-[10px] text-[#FF4D00] uppercase tracking-[0.3em] mb-2 font-bold">
                    Case Study — <?php echo explode(' / ', $project['category'])[0]; ?>
                </div>
                <h3 class="text-3xl md:text-4xl font-bold tracking-tight text-white"><?php echo $project['title']; ?></h3>
                <p class="mt-4 text-xs font-bold uppercase tracking-widest text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore Project ↗
                </p>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
</section>
