<section id="services" class="grid lg:grid-cols-12 bg-black text-white">
    <div class="lg:col-span-12 section-padding border-b border-white/10 flex flex-col lg:flex-row justify-between items-start gap-12">
        <div class="max-w-2xl" data-aos="fade-up">
            <h2 class="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Studio Services</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                <?php foreach ($services as $service): ?>
                <div class="flex items-center gap-4 group cursor-default">
                    <div class="w-1.5 h-1.5 bg-[#FF4D00] group-hover:scale-150 transition-transform duration-300"></div>
                    <span class="text-base md:text-lg font-medium"><?php echo $service; ?></span>
                </div>
                <?php endforeach; ?>
            </div>
        </div>

        <div class="pt-8 lg:pt-0 lg:max-w-xs border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-12" data-aos="fade-left">
            <p class="text-2xl font-light italic text-white/80 leading-snug">
                "We believe great design is <span class="text-white font-normal underline decoration-[#FF4D00] underline-offset-8">invisible</span>."
            </p>
        </div>
    </div>
</section>
