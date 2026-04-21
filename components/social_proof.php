<section class="section-padding bg-[#050505] border-b border-white/10">
    <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            <?php foreach ($testimonials as $t): ?>
            <div class="p-10 md:p-16 bg-[#050505] flex flex-col justify-between" data-aos="zoom-in">
                <p class="text-xl md:text-2xl font-light leading-relaxed mb-12 italic text-white/80">
                    "<?php echo $t['quote']; ?>"
                </p>
                <div>
                    <p class="font-bold text-xs uppercase tracking-widest text-[#FF4D00]"><?php echo $t['author']; ?></p>
                    <p class="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-2 font-bold"><?php echo $t['role']; ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
        
        <div class="mt-24 flex flex-col md:flex-row justify-between items-center gap-12 border-t border-white/10 pt-16" data-aos="fade-up">
            <div class="flex gap-12 opacity-30 grayscale contrast-125 hover:opacity-100 transition-opacity duration-500">
                <span class="text-xl font-black tracking-widest italic">FORBES</span>
                <span class="text-xl font-black tracking-widest italic">STRIPE</span>
                <span class="text-xl font-black tracking-widest italic">APPLE</span>
            </div>
            <div class="text-center md:text-right">
                <p class="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4 font-bold">Let’s Create Something Exceptional</p>
                <a href="#" class="text-base font-bold border-b-2 border-[#FF4D00] pb-1 hover:text-[#FF4D00] transition-colors">Start Your Project</a>
            </div>
        </div>
    </div>
</section>
