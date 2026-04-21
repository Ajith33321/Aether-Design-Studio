<section id="process" class="section-padding bg-[#080808] border-b border-white/10">
    <div class="max-w-7xl mx-auto">
        <h4 class="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-16">Our Design Process</h4>
        
        <div class="flex flex-col md:flex-row justify-between items-start gap-8">
            <?php foreach ($steps as $index => $item): ?>
            <div class="flex flex-1 items-start gap-6 group" data-aos="fade-up" data-aos-delay="<?php echo $index * 100; ?>">
                <div class="flex flex-col">
                    <span class="text-4xl font-bold mb-2 transition-colors duration-300 <?php echo $item['name'] == 'Design' ? 'text-[#FF4D00]' : 'text-white'; ?>">
                        <?php echo $item['num']; ?>
                    </span>
                    <span class="text-[10px] uppercase font-bold tracking-widest <?php echo $item['name'] == 'Design' ? 'text-[#FF4D00]' : 'text-white/60'; ?>">
                        <?php echo $item['name']; ?>
                    </span>
                </div>
                <?php if ($index < count($steps) - 1): ?>
                <div class="hidden lg:block h-px w-full bg-white/10 mt-6"></div>
                <?php endif; ?>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
