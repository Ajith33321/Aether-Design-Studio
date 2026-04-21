<?php
/**
 * Aether Design Studio - Premium UI/UX Studio
 * PHP Version for Hostinger
 */

// Component Data
$projects = [
    ["title" => "Lumina Dashboard", "category" => "Dashboard / SaaS", "image" => "https://picsum.photos/seed/dashboard/1200/800"],
    ["title" => "Verve Mobile App", "category" => "Web / Mobile", "image" => "https://picsum.photos/seed/mobile/1200/800"],
    ["title" => "Nova Fintech", "category" => "Banking / App", "image" => "https://picsum.photos/seed/fintech/1200/800"],
    ["title" => "Aura Creative", "category" => "Branding / Web", "image" => "https://picsum.photos/seed/creative/1200/800"]
];

$services = ["UI Design", "UX Strategy", "Product Design", "Design Systems", "Branding"];

$steps = [
    ["num" => "01", "name" => "Discover"],
    ["num" => "02", "name" => "Research"],
    ["num" => "03", "name" => "Wireframe"],
    ["num" => "04", "name" => "Design"],
    ["num" => "05", "name" => "Iterate"]
];

$testimonials = [
    ["quote" => "Aether's eye for detail and commitment to user experience is unmatched. They transformed our product into something world-class.", "author" => "Elena Rossi", "role" => "CPD at FintechPro"],
    ["quote" => "The best design team we've ever worked with. Their process is transparent, and the results are consistently exceptional.", "author" => "Marcus Thorne", "role" => "CEO of Nova Systems"]
];
?>
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aether Design Studio | Premium UI/UX</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- AOS Animations -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    
    <!-- Alpine JS Interaction -->
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            accent: '#FF4D00',
                            bg: '#050505',
                        }
                    }
                }
            }
        }
    </script>
    <style type="text/tailwindcss">
        @layer base {
            body { @apply bg-[#050505] text-white antialiased overflow-x-hidden; }
        }
        @layer utilities {
            .section-padding { @apply py-20 px-6 md:py-32 md:px-12 lg:px-20; }
        }
    </style>
</head>
<body>

    <?php include('components/navbar.php'); ?>

    <main>
        <?php include('components/hero.php'); ?>
        <?php include('components/portfolio.php'); ?>
        <?php include('components/services.php'); ?>
        <?php include('components/process.php'); ?>
        <?php include('components/social_proof.php'); ?>
    </main>

    <?php include('components/footer.php'); ?>

    <!-- AOS Script -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    </script>
</body>
</html>
