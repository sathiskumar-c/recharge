// <!DOCTYPE html>

// <html class="dark" lang="en"><head>
// <meta charset="utf-8"/>
// <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
// <title>AutoCharge - Account</title>
// <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
// <style>
//         body {
//             font-family: 'Inter', sans-serif;
//             background-color: #0e0e0e;
//             color: #e5e2e1;
//             margin: 0;
//             -webkit-font-smoothing: antialiased;
//         }

//         .glass-card {
//             background: rgba(26, 26, 26, 0.7);
//             backdrop-filter: blur(24px);
//             border: 1px solid rgba(255, 255, 255, 0.08);
//             border-top: 1px solid rgba(179, 197, 255, 0.15); /* Primary highlight */
//         }

//         .glow-green {
//             filter: drop-shadow(0 0 8px rgba(78, 222, 163, 0.4));
//         }

//         .glow-blue {
//             filter: drop-shadow(0 0 12px rgba(179, 197, 255, 0.3));
//         }

//         .material-symbols-outlined {
//             font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
//         }

//         .active-icon {
//             font-variation-settings: 'FILL' 1;
//         }

//         /* Subtle ambient pulse for the avatar border */
//         @keyframes pulse-border {
//             0% { border-color: rgba(78, 222, 163, 0.3); }
//             50% { border-color: rgba(78, 222, 163, 0.8); }
//             100% { border-color: rgba(78, 222, 163, 0.3); }
//         }
//         .animate-glow-border {
//             animation: pulse-border 3s infinite ease-in-out;
//         }
//     </style>
// <script id="tailwind-config">
//         tailwind.config = {
//             darkMode: "class",
//             theme: {
//                 extend: {
//                     "colors": {
//                         "tertiary-fixed": "#ffddb8",
//                         "on-background": "#e5e2e1",
//                         "on-primary-fixed": "#011849",
//                         "secondary-fixed-dim": "#4edea3",
//                         "on-secondary": "#003824",
//                         "surface-glass": "rgba(26, 26, 26, 0.7)",
//                         "primary": "#dbe2ff",
//                         "inverse-primary": "#4b5d90",
//                         "on-tertiary-fixed-variant": "#653e00",
//                         "on-tertiary-fixed": "#2a1700",
//                         "surface-container-highest": "#353534",
//                         "inverse-on-surface": "#313030",
//                         "on-primary-fixed-variant": "#334576",
//                         "glow-button": "rgba(0, 85, 213, 0.4)",
//                         "secondary": "#4edea3",
//                         "primary-fixed": "#dbe1ff",
//                         "surface-dim": "#131313",
//                         "border-white-low": "rgba(255, 255, 255, 0.08)",
//                         "on-surface": "#e5e2e1",
//                         "surface-variant": "#353534",
//                         "surface": "#131313",
//                         "on-secondary-fixed-variant": "#005236",
//                         "surface-container-low": "#1c1b1b",
//                         "error-container": "#93000a",
//                         "glow-primary": "rgba(179, 197, 255, 0.4)",
//                         "surface-container-high": "#2a2a2a",
//                         "error": "#ffb4ab",
//                         "inverse-surface": "#e5e2e1",
//                         "primary-container": "#b3c5ff",
//                         "on-tertiary": "#472a00",
//                         "secondary-fixed": "#6ffbbe",
//                         "surface-tint": "#b3c5ff",
//                         "outline": "#8f909a",
//                         "on-secondary-fixed": "#002114",
//                         "on-error": "#690005",
//                         "on-primary": "#1b2e5e",
//                         "background": "#131313",
//                         "tertiary": "#ffddb8",
//                         "surface-container": "#201f1f",
//                         "secondary-container": "#00b47d",
//                         "on-primary-container": "#3f5183",
//                         "tertiary-fixed-dim": "#ffb95f",
//                         "on-secondary-container": "#003e28",
//                         "outline-variant": "#45464f",
//                         "on-tertiary-container": "#754900",
//                         "primary-fixed-dim": "#b3c5ff",
//                         "on-surface-variant": "#c5c6d0",
//                         "on-error-container": "#ffdad6",
//                         "tertiary-container": "#ffb95f",
//                         "surface-bright": "#3a3939",
//                         "surface-container-lowest": "#0e0e0e"
//                     },
//                     "borderRadius": {
//                         "DEFAULT": "0.25rem",
//                         "lg": "0.5rem",
//                         "xl": "1.25rem",
//                         "full": "9999px"
//                     },
//                     "spacing": {
//                         "margin-desktop": "40px",
//                         "xs": "4px",
//                         "margin-mobile": "20px",
//                         "sm": "8px",
//                         "lg": "24px",
//                         "unit": "4px",
//                         "xl": "32px",
//                         "md": "16px",
//                         "gutter": "16px"
//                     }
//                 }
//             }
//         }
//     </script>
// <style>
//     body {
//       min-height: max(884px, 100dvh);
//     }
//   </style>
//   </head>
// <body class="bg-surface-container-lowest text-on-background min-h-screen pb-32">
// <!-- Top App Bar (Shared Component Strategy) -->
// <header class="fixed top-0 w-full z-50 backdrop-blur-2xl border-b border-border-white-low bg-surface-glass h-16 flex items-center justify-between px-margin-mobile">
// <div class="flex items-center gap-md">
// <span class="material-symbols-outlined text-primary" data-icon="bolt">bolt</span>
// <h1 class="font-bold text-headline-md-mobile tracking-tighter text-primary">AutoCharge</h1>
// </div>
// <div class="w-10 h-10 rounded-full border border-primary/20 overflow-hidden">
// <img class="w-full h-full object-cover" data-alt="A cinematic, high-quality profile close-up of a stylish young male named Alex, rendered in a futuristic cyberpunk aesthetic. He has short hair and a confident expression. The lighting is dominated by sharp neon electric blue and mint green glows against a pitch-black obsidian background, highlighting the metallic textures of his tech-wear jacket." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoYrCIoQN_lPwhAsDs1JfW9lMxdL4rSREkdLMYoO85Ddin654--5MPxCfg38q16Lx5doYqxKz1pq2YE0Fl1218LUxyF1-M7s591DngRAgmlVmGVxiD0xSSKQcO4Mg-iCKFRMq0VA0MspA2tq6ORYxpbCxDV6f26gCbl6FduBMxXO53Lzk0X5g3c3jtgRUqJWjfoJ1HxV-jvANNkrKdWnY1gqCtHXt6XfsmgC30yt28u4dIzS4rHKi3zGP5E6F0diLrQGceu2FoGQM"/>
// </div>
// </header>
// <main class="pt-24 px-margin-mobile max-w-4xl mx-auto space-y-xl">
// <!-- Profile Header -->
// <section class="flex flex-col items-center text-center space-y-md">
// <div class="relative group">
// <div class="absolute -inset-1 bg-secondary opacity-30 rounded-full blur animate-glow-border"></div>
// <div class="relative w-24 h-24 rounded-full border-2 border-secondary overflow-hidden bg-surface-container">
// <img class="w-full h-full object-cover" data-alt="Close up portrait of Alex, a tech-savvy user, wearing futuristic glasses with subtle interface reflections. The scene is shot in a dark room with vibrant neon green backlighting creating a sharp rim light around his silhouette. The visual style is premium, clean, and highly detailed, resembling a character from a high-performance utility app." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQeGDJkR4AiaLgJuK8BkrL1-JImpJW_ESu_sVgppOjGtdIsZKElLtuhAnaPkqzFeRpCyTe1PJ4OK2qiLX6uv6sfBfX3sncp0Wd0UVbxX6OEbGBMNURAAJYASNL97tXjRtEYRJgZ5pGdM8UsDqm0-ld8CALVnRaZsuAHdr6C5xzHZkRVKKryptQ-23c0sWE9nDg-70IZB_Sr1CxQLLv6RfHMCX0pJWpq5SMp-zhFH_1C0fAfLCbEQi3T9zPC_KmheOnzgmMxbpStzc"/>
// </div>
// <button class="absolute bottom-0 right-0 bg-secondary text-on-secondary w-8 h-8 rounded-full flex items-center justify-center border-2 border-surface-container-lowest active:scale-95 transition-transform">
// <span class="material-symbols-outlined text-[18px]" data-icon="edit">edit</span>
// </button>
// </div>
// <div>
// <h2 class="font-headline-md text-headline-md-mobile text-on-background">Alex</h2>
// <p class="font-label-md text-label-md text-outline">+1 (555) 012-3456</p>
// </div>
// </section>
// <!-- Wallet & Balance Card -->
// <section class="glass-card rounded-xl p-lg flex items-center justify-between relative overflow-hidden">
// <!-- Decorative Glow -->
// <div class="absolute -right-10 -top-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
// <div class="space-y-sm relative z-10">
// <span class="font-label-sm text-label-sm text-outline uppercase tracking-widest">Wallet Balance</span>
// <div class="flex items-baseline gap-xs">
// <span class="font-display-lg text-headline-lg-mobile text-secondary glow-green">$</span>
// <span class="font-display-lg text-headline-lg-mobile text-secondary glow-green">142.50</span>
// </div>
// </div>
// <button class="relative group active:scale-95 transition-transform">
// <div class="absolute inset-0 bg-secondary rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
// <div class="relative bg-secondary text-on-secondary px-lg py-sm rounded-full font-label-md flex items-center gap-sm">
// <span class="material-symbols-outlined text-[20px]" data-icon="add_circle">add_circle</span>
//                     Top Up
//                 </div>
// </button>
// </section>
// <!-- Menu Groups -->
// <div class="space-y-md">
// <!-- Personal Info -->
// <div class="space-y-sm">
// <h3 class="font-label-sm text-label-sm text-outline px-sm uppercase tracking-widest">Personal Information</h3>
// <div class="glass-card rounded-xl overflow-hidden">
// <div class="flex items-center justify-between p-md border-b border-border-white-low group hover:bg-white/[0.02] transition-colors cursor-pointer">
// <div class="flex items-center gap-md">
// <span class="material-symbols-outlined text-outline" data-icon="person">person</span>
// <div class="flex flex-col">
// <span class="font-label-md text-label-md text-on-surface">Full Name</span>
// <span class="font-body-md text-body-md text-outline">Alex Henderson</span>
// </div>
// </div>
// <span class="material-symbols-outlined text-outline text-[20px]" data-icon="chevron_right">chevron_right</span>
// </div>
// <div class="flex items-center justify-between p-md border-b border-border-white-low group hover:bg-white/[0.02] transition-colors cursor-pointer">
// <div class="flex items-center gap-md">
// <span class="material-symbols-outlined text-outline" data-icon="mail">mail</span>
// <div class="flex flex-col">
// <span class="font-label-md text-label-md text-on-surface">Email Address</span>
// <span class="font-body-md text-body-md text-outline">alex.h@autocharge.pro</span>
// </div>
// </div>
// <span class="material-symbols-outlined text-outline text-[20px]" data-icon="chevron_right">chevron_right</span>
// </div>
// </div>
// </div>
// <!-- Payment Methods -->
// <div class="space-y-sm">
// <h3 class="font-label-sm text-label-sm text-outline px-sm uppercase tracking-widest">Payment Methods</h3>
// <div class="glass-card rounded-xl overflow-hidden">
// <div class="flex items-center justify-between p-md border-b border-border-white-low hover:bg-white/[0.02] transition-colors cursor-pointer">
// <div class="flex items-center gap-md">
// <div class="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
// <span class="material-symbols-outlined text-[18px] text-primary" data-icon="credit_card">credit_card</span>
// </div>
// <div class="flex flex-col">
// <span class="font-label-md text-label-md text-on-surface">Visa •••• 4242</span>
// <span class="font-caption-xs text-caption-xs text-outline">Expires 09/26</span>
// </div>
// </div>
// <span class="text-secondary font-label-sm uppercase tracking-tighter">Primary</span>
// </div>
// <div class="p-md flex items-center gap-sm text-primary hover:bg-white/[0.02] transition-colors cursor-pointer">
// <span class="material-symbols-outlined text-[20px]" data-icon="add">add</span>
// <span class="font-label-md">Add New Card</span>
// </div>
// </div>
// </div>
// <!-- Security -->
// <div class="space-y-sm">
// <h3 class="font-label-sm text-label-sm text-outline px-sm uppercase tracking-widest">Security</h3>
// <div class="glass-card rounded-xl overflow-hidden">
// <div class="flex items-center justify-between p-md border-b border-border-white-low">
// <div class="flex items-center gap-md">
// <span class="material-symbols-outlined text-outline" data-icon="fingerprint">fingerprint</span>
// <span class="font-label-md text-label-md text-on-surface">Biometric Unlock</span>
// </div>
// <!-- Toggle Switch -->
// <div class="w-10 h-5 bg-secondary/20 rounded-full relative p-0.5 cursor-pointer border border-secondary/30">
// <div class="w-4 h-4 bg-secondary rounded-full shadow-[0_0_8px_rgba(78,222,163,0.8)] ml-auto"></div>
// </div>
// </div>
// <div class="flex items-center justify-between p-md hover:bg-white/[0.02] transition-colors cursor-pointer">
// <div class="flex items-center gap-md">
// <span class="material-symbols-outlined text-outline" data-icon="lock_reset">lock_reset</span>
// <span class="font-label-md text-label-md text-on-surface">Change Security Pin</span>
// </div>
// <span class="material-symbols-outlined text-outline text-[20px]" data-icon="chevron_right">chevron_right</span>
// </div>
// </div>
// </div>
// <!-- App Settings -->
// <div class="space-y-sm">
// <h3 class="font-label-sm text-label-sm text-outline px-sm uppercase tracking-widest">App Settings</h3>
// <div class="glass-card rounded-xl overflow-hidden">
// <div class="flex items-center justify-between p-md border-b border-border-white-low">
// <div class="flex items-center gap-md">
// <span class="material-symbols-outlined text-outline" data-icon="dark_mode">dark_mode</span>
// <span class="font-label-md text-label-md text-on-surface">Dark Mode</span>
// </div>
// <span class="text-secondary font-caption-xs uppercase">Always On</span>
// </div>
// <div class="flex items-center justify-between p-md hover:bg-white/[0.02] transition-colors cursor-pointer">
// <div class="flex items-center gap-md">
// <span class="material-symbols-outlined text-outline" data-icon="notifications_active">notifications_active</span>
// <span class="font-label-md text-label-md text-on-surface">Notifications</span>
// </div>
// <div class="w-10 h-5 bg-outline-variant/30 rounded-full relative p-0.5 cursor-pointer border border-border-white-low">
// <div class="w-4 h-4 bg-outline rounded-full"></div>
// </div>
// </div>
// </div>
// </div>
// <!-- Support & Legal -->
// <div class="space-y-sm">
// <h3 class="font-label-sm text-label-sm text-outline px-sm uppercase tracking-widest">Support &amp; Legal</h3>
// <div class="glass-card rounded-xl overflow-hidden">
// <div class="flex items-center justify-between p-md border-b border-border-white-low hover:bg-white/[0.02] transition-colors cursor-pointer">
// <div class="flex items-center gap-md">
// <span class="material-symbols-outlined text-outline" data-icon="help_center">help_center</span>
// <span class="font-label-md text-label-md text-on-surface">Help Center</span>
// </div>
// <span class="material-symbols-outlined text-outline text-[20px]" data-icon="open_in_new">open_in_new</span>
// </div>
// <div class="flex items-center justify-between p-md hover:bg-white/[0.02] transition-colors cursor-pointer">
// <div class="flex items-center gap-md">
// <span class="material-symbols-outlined text-outline" data-icon="description">description</span>
// <span class="font-label-md text-label-md text-on-surface">Terms of Service</span>
// </div>
// <span class="material-symbols-outlined text-outline text-[20px]" data-icon="chevron_right">chevron_right</span>
// </div>
// </div>
// </div>
// </div>
// <!-- Logout Section -->
// <div class="flex flex-col items-center pt-xl space-y-md">
// <button class="text-error font-label-md active:opacity-50 transition-opacity flex items-center gap-sm">
// <span class="material-symbols-outlined" data-icon="logout">logout</span>
//                 Logout from AutoCharge
//             </button>
// <p class="font-caption-xs text-caption-xs text-outline-variant">Version 4.2.0-pro</p>
// </div>
// </main>
// <!-- Bottom Navigation Bar (Shared Component Strategy) -->
// <nav class="fixed bottom-6 left-0 right-0 z-50 flex justify-around items-center h-16 px-md mx-margin-mobile bg-surface-glass backdrop-blur-xl border border-border-white-low rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)]">
// <!-- Dash -->
// <a class="flex flex-col items-center justify-center text-outline transition-colors hover:text-primary" href="#">
// <span class="material-symbols-outlined text-[24px]" data-icon="grid_view">grid_view</span>
// <span class="font-label-sm text-label-sm">Dash</span>
// </a>
// <!-- Plans -->
// <a class="flex flex-col items-center justify-center text-outline transition-colors hover:text-primary" href="#">
// <span class="material-symbols-outlined text-[24px]" data-icon="auto_recharge">auto_delete</span>
// <span class="font-label-sm text-label-sm">Plans</span>
// </a>
// <!-- History -->
// <a class="flex flex-col items-center justify-center text-outline transition-colors hover:text-primary" href="#">
// <span class="material-symbols-outlined text-[24px]" data-icon="history">history</span>
// <span class="font-label-sm text-label-sm">History</span>
// </a>
// <!-- Account (ACTIVE) -->
// <a class="flex flex-col items-center justify-center text-secondary drop-shadow-[0_0_8px_rgba(78,222,163,0.5)]" href="#">
// <span class="material-symbols-outlined text-[24px] active-icon" data-icon="person">person</span>
// <span class="font-label-sm text-label-sm">Account</span>
// </a>
// </nav>
// <script>
//         // Simple micro-interaction for toggle switches
//         document.querySelectorAll('.cursor-pointer').forEach(el => {
//             el.addEventListener('click', function() {
//                 const dot = this.querySelector('div[class*="rounded-full"]');
//                 if (dot && dot.parentElement.classList.contains('w-10')) {
//                     const isRight = dot.classList.contains('ml-auto');
//                     if (isRight) {
//                         dot.classList.remove('ml-auto');
//                         dot.classList.replace('bg-secondary', 'bg-outline');
//                         dot.classList.remove('shadow-[0_0_8px_rgba(78,222,163,0.8)]');
//                         this.classList.replace('bg-secondary/20', 'bg-outline-variant/30');
//                         this.classList.replace('border-secondary/30', 'border-border-white-low');
//                     } else {
//                         dot.classList.add('ml-auto');
//                         dot.classList.replace('bg-outline', 'bg-secondary');
//                         dot.classList.add('shadow-[0_0_8px_rgba(78,222,163,0.8)]');
//                         this.classList.replace('bg-outline-variant/30', 'bg-secondary/20');
//                         this.classList.replace('border-border-white-low', 'border-secondary/30');
//                     }
//                 }
//             });
//         });
//     </script>
// </body></html>
