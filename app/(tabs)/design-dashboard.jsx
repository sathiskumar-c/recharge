// <!DOCTYPE html><html class="dark" lang="en"><head>
// <meta charset="utf-8">
// <meta content="width=device-width, initial-scale=1.0" name="viewport">
// <title>AutoCharge Dashboard</title>
// <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet">
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
// <script id="tailwind-config">
//         tailwind.config = {
//             darkMode: "class",
//             theme: {
//                 extend: {
//                     "colors": {
//                         "on-secondary": "#003824",
//                         "surface-container-lowest": "#0e0e0e",
//                         "secondary-fixed-dim": "#4edea3",
//                         "tertiary-container": "#ca8100",
//                         "on-surface-variant": "#c2c6d8",
//                         "on-primary-fixed": "#001849",
//                         "on-secondary-fixed-variant": "#005236",
//                         "outline": "#8c90a1",
//                         "on-error-container": "#ffdad6",
//                         "primary-fixed-dim": "#b3c5ff",
//                         "surface-container-low": "#1c1b1b",
//                         "tertiary-fixed-dim": "#ffb95f",
//                         "surface-bright": "#3a3939",
//                         "outline-variant": "#424655",
//                         "primary": "#b3c5ff",
//                         "on-primary-fixed-variant": "#003fa4",
//                         "surface-tint": "#b3c5ff",
//                         "on-secondary-fixed": "#002113",
//                         "surface-container-high": "#2a2a2a",
//                         "surface-container-highest": "#353534",
//                         "tertiary-fixed": "#ffddb8",
//                         "inverse-surface": "#e5e2e1",
//                         "on-tertiary": "#472a00",
//                         "error": "#ffb4ab",
//                         "on-tertiary-fixed": "#2a1700",
//                         "on-surface": "#e5e2e1",
//                         "tertiary": "#ffb95f",
//                         "on-primary-container": "#002567",
//                         "inverse-primary": "#0055d5",
//                         "surface-dim": "#131313",
//                         "primary-fixed": "#dae1ff",
//                         "on-primary": "#002b75",
//                         "background": "#131313",
//                         "on-secondary-container": "#00311f",
//                         "secondary-fixed": "#6ffbbe",
//                         "secondary-container": "#00a572",
//                         "on-tertiary-fixed-variant": "#653e00",
//                         "secondary": "#4edea3",
//                         "surface-variant": "#353534",
//                         "on-background": "#e5e2e1",
//                         "on-tertiary-container": "#3e2400",
//                         "primary-container": "#5e8bff",
//                         "surface": "#131313",
//                         "inverse-on-surface": "#313030",
//                         "error-container": "#93000a",
//                         "on-error": "#690005",
//                         "surface-container": "#201f1f"
//                     },
//                     "borderRadius": {
//                         "DEFAULT": "0.25rem",
//                         "lg": "0.5rem",
//                         "xl": "0.75rem",
//                         "full": "9999px"
//                     },
//                     "spacing": {
//                         "margin-mobile": "20px",
//                         "sm": "8px",
//                         "xl": "32px",
//                         "gutter": "16px",
//                         "margin-desktop": "40px",
//                         "md": "16px",
//                         "unit": "4px",
//                         "xs": "4px",
//                         "lg": "24px"
//                     },
//                     "fontFamily": {
//                         "headline-md": ["Inter"],
//                         "headline-lg-mobile": ["Inter"],
//                         "data-bold": ["Inter"],
//                         "label-sm": ["Inter"],
//                         "headline-lg": ["Inter"],
//                         "body-md": ["Inter"],
//                         "label-md": ["Inter"],
//                         "display-lg": ["Inter"]
//                     },
//                     "fontSize": {
//                         "headline-md": ["24px", { "lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
//                         "headline-lg-mobile": ["28px", { "lineHeight": "36px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
//                         "data-bold": ["18px", { "lineHeight": "24px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
//                         "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "500" }],
//                         "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
//                         "body-md": ["16px", { "lineHeight": "24px", "letterSpacing": "0em", "fontWeight": "400" }],
//                         "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500" }],
//                         "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.03em", "fontWeight": "700" }]
//                     }
//                 }
//             }
//         }
//     </script>
// <style>
//         body {
//             background-color: #0A0A0A;
//             background-image: radial-gradient(circle at 50% 0%, rgba(94, 139, 255, 0.05) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(78, 222, 163, 0.03) 0%, transparent 50%);
//             background-attachment: fixed;
//             color: #e5e2e1;
//         }
//         .glass-card {
//             background: rgba(26, 26, 26, 0.7);
//             backdrop-filter: blur(24px);
//             -webkit-backdrop-filter: blur(24px);
//             border: 1px solid rgba(255, 255, 255, 0.08);
//             box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 8px 32px rgba(0, 0, 0, 0.4);
//         }
//         .glass-card-highlight {
//             border-top: 1px solid rgba(179, 197, 255, 0.3);
//         }
//         .glow-text {
//             text-shadow: 0 0 12px rgba(179, 197, 255, 0.4);
//         }
//         .glow-button {
//             box-shadow: 0 0 20px rgba(0, 85, 213, 0.4);
//         }
//         .progress-ring__circle {
//             transition: stroke-dashoffset 0.35s;
//             transform: rotate(-90deg);
//             transform-origin: 50% 50%;
//         }
//     </style>
// <style>
//     body {
//       min-height: max(884px, 100dvh);
//     }
//   </style>
//   </head>
// <body class="font-body-md antialiased min-h-screen flex flex-col pb-24">
// <!-- TopAppBar (Web & Mobile Hybrid Concept) -->
// <header class="bg-background/80 dark:bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-sm flex justify-between items-center w-full px-margin-mobile py-sm z-50 sticky top-0">
// <div class="flex items-center gap-3">
// <div class="w-10 h-10 rounded-full overflow-hidden border border-white/10">
// <img alt="User profile photo" class="w-full h-full object-cover" data-alt="A sophisticated macro shot of a sleek, dark metallic profile avatar placeholder. The lighting is moody and cinematic, highlighting the smooth curved edges of the circular frame against a deep obsidian background. Subtle electric blue reflections give it a premium, high-tech fintech aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkKnGd74NdWKV_mSmAC1kvW3Ee_r93owXkDuWNdibeyQrcDQc7tMFbOaoyK74i3Ix9FlIu-i5ehYW1FzdIMiIP7JPxboDZKPCCSgSguQyxTF4KYJ9L_GCTX21jxt0KF3_Og7Dx489vBKfzpeACdMPkBojQ951gRpjpiofFqxVjMoUymZPmvueC4ME-HjorNd7AoCAgJg7USle_5S51BQeVxeG6Oan8dJP4u9ziLjS8h_SqlK-RlLVNJ0aXX1beSBLx6m458DVC_Zg">
// </div>
// <div>
// <p class="text-label-sm font-label-sm text-outline">Good evening,</p>
// <h1 class="text-label-md font-label-md font-bold text-on-surface">Alex</h1>
// </div>
// </div>
// <button class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-white/5 hover:bg-surface-variant/20 transition-colors relative">
// <span class="material-symbols-outlined text-primary dark:text-primary" style="font-variation-settings: 'FILL' 0;">notifications</span>
// <span class="absolute top-2 right-2 w-2 h-2 rounded-full bg-error"></span>
// </button>
// </header>
// <main class="flex-1 px-margin-mobile md:px-margin-desktop py-xl max-w-4xl mx-auto w-full space-y-xl">
// <!-- Smart Insight Banner -->
// <div class="glass-card rounded-xl p-md flex items-center gap-md border-l-2 border-l-primary relative overflow-hidden">
// <div class="absolute inset-0 bg-primary-container/5 pointer-events-none"></div>
// <div class="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center flex-shrink-0">
// <span class="material-symbols-outlined text-primary">psychology</span>
// </div>
// <div>
// <p class="text-label-md font-label-md font-bold text-primary">Smart Insight</p>
// <p class="text-label-sm font-label-sm text-on-surface-variant mt-xs">Your current plan may expire tonight at 11:59 PM. Auto-recharge is ready.</p>
// </div>
// </div>
// <!-- Hero Card: Ultra Plan -->
// <section class="glass-card glass-card-highlight rounded-2xl p-lg relative overflow-hidden">
// <!-- Subtle background glow -->
// <div class="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
// <div class="flex justify-between items-start mb-lg relative z-10 items-center">
// <div>
// <div class="flex items-center gap-2 mb-xs">

// <span class="px-2 py-1 rounded bg-tertiary-container/20 border border-tertiary/30 text-[10px] font-bold text-tertiary tracking-wider flex items-center gap-1 w-full justify-center">
// <span class="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
//                             Expires in 2h 14m
//                         </span>
// </div>
// <h2 class="text-headline-md font-headline-md text-on-surface flex items-center gap-2 mt-sm">+91 98765 43210</h2>
// <p class="text-label-md font-label-md text-on-surface-variant flex items-center gap-1 mt-1">
// <span class="w-2 h-2 rounded-full bg-primary inline-block"></span>
//                         Airtel AirFiber • Ultra Plan
//                     </p>
// </div>
// <!-- Circular Progress -->
// <div class="relative w-32 h-32 flex-shrink-0">
// <svg class="w-full h-full" viewBox="0 0 100 100">
// <circle class="text-surface-container-highest stroke-current" cx="50" cy="50" fill="transparent" r="40" stroke-width="6"></circle>
// <circle class="text-tertiary stroke-current progress-ring__circle" cx="50" cy="50" fill="transparent" r="40" stroke-dasharray="251.2" stroke-dashoffset="200.96" stroke-linecap="round" stroke-width="6"></circle>
// </svg>
// <div class="absolute inset-0 flex flex-col items-center justify-center">
// <span class="text-headline-md font-data-bold text-tertiary">20%</span>
// <span class="text-label-sm text-on-surface-variant uppercase tracking-wider">Left</span>
// </div>
// </div>
// </div>
// <div class="grid grid-cols-2 gap-4 mb-lg relative z-10">
// <div class="bg-surface-container/50 rounded-lg p-sm border border-white/5">
// <p class="text-label-sm font-label-sm text-outline">Data Left</p>
// <p class="text-label-md font-label-md font-bold text-on-surface">4.2 GB</p>
// </div>
// <div class="bg-surface-container/50 rounded-lg p-sm border border-white/5">
// <p class="text-label-sm font-label-sm text-outline">Pack Value</p>
// <p class="text-label-md font-label-md font-bold text-on-surface">₹599.00</p>
// </div>
// </div>
// <button class="w-full bg-gradient-to-r from-inverse-primary to-primary-container text-white py-3 rounded-lg text-label-md font-label-md font-bold flex items-center justify-center gap-2 glow-button relative z-10 transition-transform active:scale-[0.98]">
// <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">bolt</span>
//                 Schedule Recharge
//             </button>
// </section>
// <!-- Quick Actions Grid -->
// <section class="grid grid-cols-2 gap-md">
// <!-- Action 1 -->
// <button class="glass-card rounded-xl p-md flex flex-col items-center justify-center gap-sm hover:bg-surface-variant/20 transition-all group">
// <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
// <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">calendar_month</span>
// </div>
// <span class="text-label-sm font-label-sm text-on-surface">Schedule Recharge</span>
// </button>
// <!-- Action 2 -->
// <button class="glass-card rounded-xl p-md flex flex-col items-center justify-center gap-sm hover:bg-surface-variant/20 transition-all group">
// <div class="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
// <span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">flash_on</span>
// </div>
// <span class="text-label-sm font-label-sm text-on-surface">Recharge Now</span>
// </button>
// <!-- Action 3 -->
// <button class="glass-card rounded-xl p-md flex flex-col items-center justify-center gap-sm hover:bg-surface-variant/20 transition-all group">
// <div class="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
// <span class="material-symbols-outlined text-tertiary" style="font-variation-settings: 'FILL' 1;">family_home</span>
// </div>
// <span class="text-label-sm font-label-sm text-on-surface">Family Numbers</span>
// </button>
// <!-- Action 4 -->
// <button class="glass-card rounded-xl p-md flex flex-col items-center justify-center gap-sm hover:bg-surface-variant/20 transition-all group">
// <div class="w-12 h-12 rounded-full bg-on-surface-variant/10 flex items-center justify-center group-hover:scale-110 transition-transform">
// <span class="material-symbols-outlined text-on-surface-variant" style="font-variation-settings: 'FILL' 1;">history</span>
// </div>
// <span class="text-label-sm font-label-sm text-on-surface">History</span>
// </button>
// </section>
// <!-- Upcoming Queue -->
// <section>
// <div class="flex justify-between items-center mb-md">
// <h3 class="text-headline-md font-headline-md text-on-surface">Upcoming Queue</h3>
// <button class="text-label-sm font-label-sm text-primary hover:text-primary-fixed transition-colors">View All</button>
// </div>
// <div class="space-y-sm">
// <!-- Queue Item 1 -->
// <div class="glass-card rounded-lg p-md flex items-center justify-between border-l-2 border-l-primary">
// <div class="flex items-center gap-md">
// <div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-white/5">
// <span class="material-symbols-outlined text-outline">wifi</span>
// </div>
// <div>
// <p class="text-label-md font-label-md font-bold text-on-surface">+91 73445 11280</p>
// <p class="text-label-sm font-label-sm text-on-surface-variant">Feb 24, 10:00 AM • ₹1,299</p>
// </div>
// </div>
// <span class="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary tracking-wide">PENDING</span>
// </div>
// <!-- Queue Item 2 -->
// <div class="glass-card rounded-lg p-md flex items-center justify-between border-l-2 border-l-secondary opacity-75">
// <div class="flex items-center gap-md">
// <div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-white/5">
// <span class="material-symbols-outlined text-outline">smartphone</span>
// </div>
// <div>
// <p class="text-label-md font-label-md font-bold text-on-surface">+91 99022 55471</p>
// <p class="text-label-sm font-label-sm text-on-surface-variant">Feb 20, 04:30 PM • ₹499</p>
// </div>
// </div>
// <span class="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-[10px] font-bold text-secondary tracking-wide">COMPLETED</span>
// </div>
// <!-- Queue Item 3 -->
// <div class="glass-card rounded-lg p-md flex items-center justify-between border-l-2 border-l-error opacity-75">
// <div class="flex items-center gap-md">
// <div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-white/5">
// <span class="material-symbols-outlined text-outline">router</span>
// </div>
// <div>
// <p class="text-label-md font-label-md font-bold text-on-surface">Gifi Router-X821</p>
// <p class="text-label-sm font-label-sm text-on-surface-variant">Feb 18, 09:15 AM • ₹999</p>
// </div>
// </div>
// <span class="px-3 py-1 rounded-full bg-error/10 border border-error/20 text-[10px] font-bold text-error tracking-wide">FAILED</span>
// </div>
// </div>
// </section>
// </main>
// <!-- BottomNavBar (Mobile Only) -->
// <nav class="md:hidden bg-surface-container/60 dark:bg-surface-container/60 backdrop-blur-2xl text-secondary-fixed-dim dark:text-secondary-fixed-dim fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] rounded-full border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-50">
// <ul class="flex justify-around items-center h-16">
// <!-- Active Tab: Home -->
// <li class="">
// <a class="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim scale-110 hover:text-secondary-fixed transition-transform spring-animate duration-300" href="#">
// <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">home</span>
// <span class="text-[10px] font-label-sm mt-1">Home</span>
// </a>
// </li>
// <!-- Inactive Tabs -->
// <li class="">
// <a class="flex flex-col items-center justify-center text-outline dark:text-outline-variant hover:text-secondary-fixed transition-transform spring-animate duration-300" href="#">
// <span class="material-symbols-outlined">calendar_today</span>
// <span class="text-[10px] font-label-sm mt-1">Schedule</span>
// </a>
// </li>
// <li class="">
// <a class="flex flex-col items-center justify-center text-outline dark:text-outline-variant hover:text-secondary-fixed transition-transform spring-animate duration-300" href="#">
// <span class="material-symbols-outlined">account_balance_wallet</span>
// <span class="text-[10px] font-label-sm mt-1">Wallet</span>
// </a>
// </li>
// <li class="">
// <a class="flex flex-col items-center justify-center text-outline dark:text-outline-variant hover:text-secondary-fixed transition-transform spring-animate duration-300" href="#">
// <span class="material-symbols-outlined">person</span>
// <span class="text-[10px] font-label-sm mt-1">Account</span>
// </a>
// </li>
// </ul>
// </nav>
// <!-- Web Navigation (Hidden on Mobile) -->
// <nav class="hidden md:block fixed left-4 top-1/2 -translate-y-1/2 glass-card rounded-2xl py-lg px-sm z-50">
// <ul class="flex flex-col gap-xl">
// <li>
// <a class="flex flex-col items-center justify-center text-secondary scale-110 transition-transform group relative" href="#">
// <div class="absolute inset-0 bg-secondary/20 rounded-xl blur-md -z-10"></div>
// <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">home</span>
// </a>
// </li>
// <li>
// <a class="flex flex-col items-center justify-center text-outline hover:text-secondary transition-transform hover:scale-110" href="#">
// <span class="material-symbols-outlined">calendar_today</span>
// </a>
// </li>
// <li>
// <a class="flex flex-col items-center justify-center text-outline hover:text-secondary transition-transform hover:scale-110" href="#">
// <span class="material-symbols-outlined">account_balance_wallet</span>
// </a>
// </li>
// <li>
// <a class="flex flex-col items-center justify-center text-outline hover:text-secondary transition-transform hover:scale-110" href="#">
// <span class="material-symbols-outlined">person</span>
// </a>
// </li>
// </ul>
// </nav>

// </body></html>
