// <!DOCTYPE html>

// <html class="dark" lang="en"><head>
// <meta charset="utf-8"/>
// <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
// <title>Verify Identity - AutoCharge Pro</title>
// <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
// <style>
//         body {
//             font-family: 'Inter', sans-serif;
//             background-color: #131313;
//             color: #e5e2e1;
//             overflow: hidden;
//         }

//         .glass-panel {
//             background: rgba(26, 26, 26, 0.7);
//             backdrop-filter: blur(24px);
//             border: 1px solid rgba(255, 255, 255, 0.08);
//             border-top: 1px solid rgba(179, 197, 255, 0.2);
//         }

//         .otp-input:focus {
//             outline: none;
//             border-color: #b3c5ff;
//             box-shadow: 0 0 20px rgba(179, 197, 255, 0.4);
//             transform: scale(1.05);
//         }

//         .glow-button {
//             box-shadow: 0 0 20px rgba(0, 85, 213, 0.4);
//             transition: all 0.3s ease;
//         }

//         .glow-button:active {
//             transform: scale(0.95);
//         }

//         .scanline {
//             width: 100%;
//             height: 100px;
//             z-index: 1;
//             background: linear-gradient(0deg, rgba(78, 222, 163, 0) 0%, rgba(78, 222, 163, 0.05) 50%, rgba(78, 222, 163, 0) 100%);
//             position: absolute;
//             bottom: 100%;
//             animation: scan 8s linear infinite;
//         }

//         @keyframes scan {
//             0% { bottom: 100%; }
//             100% { bottom: -100px; }
//         }

//         .shimmer {
//             background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
//             background-size: 200% 100%;
//             animation: shimmer 3s infinite;
//         }

//         @keyframes shimmer {
//             0% { background-position: -200% 0; }
//             100% { background-position: 200% 0; }
//         }
//     </style>
// <script id="tailwind-config">
//         tailwind.config = {
//             darkMode: "class",
//             theme: {
//                 extend: {
//                     "colors": {
//                         "inverse-primary": "#4b5d90",
//                         "on-primary": "#1b2e5e",
//                         "surface-container": "#201f1f",
//                         "secondary-fixed": "#6ffbbe",
//                         "on-tertiary-container": "#754900",
//                         "on-secondary-container": "#003e28",
//                         "background": "#131313",
//                         "secondary": "#4edea3",
//                         "on-background": "#e5e2e1",
//                         "secondary-fixed-dim": "#4edea3",
//                         "tertiary-fixed": "#ffddb8",
//                         "surface-tint": "#b3c5ff",
//                         "on-secondary": "#003824",
//                         "border-white-low": "rgba(255, 255, 255, 0.08)",
//                         "primary-container": "#b3c5ff",
//                         "primary": "#dbe2ff",
//                         "surface-container-highest": "#353534",
//                         "secondary-container": "#00b47d",
//                         "on-tertiary-fixed-variant": "#653e00",
//                         "inverse-surface": "#e5e2e1",
//                         "on-primary-fixed-variant": "#334576",
//                         "on-secondary-fixed": "#002114",
//                         "tertiary-fixed-dim": "#ffb95f",
//                         "glow-button": "rgba(0, 85, 213, 0.4)",
//                         "on-error": "#690005",
//                         "inverse-on-surface": "#313030",
//                         "surface-variant": "#353534",
//                         "on-surface-variant": "#c5c6d0",
//                         "on-primary-fixed": "#011849",
//                         "surface-bright": "#3a3939",
//                         "primary-fixed-dim": "#b3c5ff",
//                         "error-container": "#93000a",
//                         "tertiary-container": "#ffb95f",
//                         "on-secondary-fixed-variant": "#005236",
//                         "on-primary-container": "#3f5183",
//                         "tertiary": "#ffddb8",
//                         "outline": "#8f909a",
//                         "surface-container-low": "#1c1b1b",
//                         "on-error-container": "#ffdad6",
//                         "surface-container-high": "#2a2a2a",
//                         "surface-dim": "#131313",
//                         "surface-glass": "rgba(26, 26, 26, 0.7)",
//                         "on-tertiary": "#472a00",
//                         "glow-primary": "rgba(179, 197, 255, 0.4)",
//                         "primary-fixed": "#dbe1ff",
//                         "on-surface": "#e5e2e1",
//                         "surface": "#131313",
//                         "on-tertiary-fixed": "#2a1700",
//                         "error": "#ffb4ab",
//                         "outline-variant": "#45464f",
//                         "surface-container-lowest": "#0e0e0e"
//                     },
//                     "spacing": {
//                         "xl": "32px",
//                         "margin-mobile": "20px",
//                         "sm": "8px",
//                         "margin-desktop": "40px",
//                         "lg": "24px",
//                         "gutter": "16px",
//                         "unit": "4px",
//                         "md": "16px",
//                         "xs": "4px"
//                     },
//                     "fontFamily": {
//                         "headline-md": ["Inter"],
//                         "display-lg": ["Inter"],
//                         "caption-xs": ["Inter"],
//                         "label-sm": ["Inter"],
//                         "headline-lg": ["Inter"],
//                         "body-md": ["Inter"],
//                         "label-md": ["Inter"],
//                         "data-bold": ["Inter"],
//                         "headline-lg-mobile": ["Inter"]
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
// <body class="flex items-center justify-center min-h-screen p-margin-mobile">
// <!-- Ambient Background Lighting -->
// <div class="fixed inset-0 overflow-hidden pointer-events-none">
// <div class="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-inverse-primary/10 blur-[120px] rounded-full"></div>
// <div class="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full"></div>
// <div class="scanline"></div>
// </div>
// <!-- Top App Bar (Simplified for verification flow) -->
// <header class="fixed top-0 left-0 right-0 flex justify-between items-center w-full px-margin-mobile py-sm z-50 bg-background/80 backdrop-blur-xl border-b border-white/10">
// <div class="flex items-center gap-sm">
// <button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-variant/20 transition-colors">
// <span class="material-symbols-outlined text-on-surface">arrow_back</span>
// </button>
// <span class="text-headline-md font-headline-md font-bold tracking-tight text-on-surface">AutoCharge</span>
// </div>
// <div class="w-10 h-10 rounded-full bg-surface-container overflow-hidden border border-white/10">
// <img class="w-full h-full object-cover" data-alt="A futuristic professional portrait of a tech-savvy user, wearing a sleek black turtleneck, illuminated by soft cyan and magenta neon rim lights against a dark, blurred tech laboratory background. The aesthetic is ultra-modern and premium, matching a cyber-premium glassmorphism theme." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRUcw-vXDSGGyFEAPNTEFjEcpeBsC7gM963proACDCzzwQMzLzpfA2CIYzxy_6_SxEYVo8JomdZ2yiRH_NdNwlM7t4vkrkDY5OXPEGwg9El7HJ4bWaRgoO6XHw-eejaBBJ9QX4vNUjZB01ZSz0724gccW_K4Sp3CRsTqUwcX64wnW1yaQlCo_PkDat8uJbKGQI6djIPdJ1g-nGLw_51NBclLqyJyZ5tHIaKdwOKj31a1EM0TPfwXWvR1EDmEoKXP-lhYLIhEPLDxQ"/>
// </div>
// </header>
// <!-- Main Verification Modal -->
// <main class="w-full max-w-md z-10">
// <div class="glass-panel p-xl rounded-[2rem] shadow-2xl relative overflow-hidden">
// <!-- Animated Background Detail -->
// <div class="absolute top-0 right-0 p-lg opacity-10">
// <span class="material-symbols-outlined text-[80px]">security</span>
// </div>
// <!-- Content Header -->
// <div class="text-center mb-xl">
// <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-container/20 border border-primary/20 mb-md">
// <span class="material-symbols-outlined text-primary text-headline-md" style="font-variation-settings: 'FILL' 1;">verified_user</span>
// </div>
// <h1 class="text-headline-lg-mobile font-headline-lg-mobile text-on-surface mb-sm">Verify Your Identity</h1>
// <p class="text-body-md font-body-md text-on-surface-variant px-md">
//                     We've sent a 6-digit code to <span class="text-primary font-medium">a***.h@autocharge.pro</span>
// </p>
// </div>
// <!-- OTP Input Form -->
// <form class="space-y-xl" id="otp-form">
// <div class="flex justify-between gap-unit">
// <!-- OTP Digit Boxes -->
// <input autofocus="" class="otp-input w-12 h-14 md:w-14 md:h-16 text-center text-headline-md font-headline-md bg-surface-container-low border border-outline-variant rounded-xl text-primary transition-all" inputmode="numeric" maxlength="1" pattern="\d*" type="text"/>
// <input class="otp-input w-12 h-14 md:w-14 md:h-16 text-center text-headline-md font-headline-md bg-surface-container-low border border-outline-variant rounded-xl text-primary transition-all" inputmode="numeric" maxlength="1" pattern="\d*" type="text"/>
// <input class="otp-input w-12 h-14 md:w-14 md:h-16 text-center text-headline-md font-headline-md bg-surface-container-low border border-outline-variant rounded-xl text-primary transition-all" inputmode="numeric" maxlength="1" pattern="\d*" type="text"/>
// <input class="otp-input w-12 h-14 md:w-14 md:h-16 text-center text-headline-md font-headline-md bg-surface-container-low border border-outline-variant rounded-xl text-primary transition-all" inputmode="numeric" maxlength="1" pattern="\d*" type="text"/>
// <input class="otp-input w-12 h-14 md:w-14 md:h-16 text-center text-headline-md font-headline-md bg-surface-container-low border border-outline-variant rounded-xl text-primary transition-all" inputmode="numeric" maxlength="1" pattern="\d*" type="text"/>
// <input class="otp-input w-12 h-14 md:w-14 md:h-16 text-center text-headline-md font-headline-md bg-surface-container-low border border-outline-variant rounded-xl text-primary transition-all" inputmode="numeric" maxlength="1" pattern="\d*" type="text"/>
// </div>
// <div class="space-y-md">
// <button class="glow-button w-full h-14 bg-gradient-to-r from-inverse-primary to-primary-container text-on-primary font-bold rounded-xl text-body-md uppercase tracking-wider flex items-center justify-center gap-sm" type="submit">
// <span>Verify</span>
// <span class="material-symbols-outlined text-sm">chevron_right</span>
// </button>
// <div class="text-center">
// <p class="text-label-md font-label-md text-on-surface-variant">
//                             Didn't receive the code?
//                             <button class="text-secondary font-bold hover:underline ml-xs transition-colors" type="button">Resend OTP</button>
// </p>
// </div>
// </div>
// </form>
// <!-- Insight Banner (Security Note) -->
// <div class="mt-xl p-md rounded-xl bg-secondary-container/5 border-l-2 border-secondary flex gap-md items-start shimmer">
// <span class="material-symbols-outlined text-secondary text-md mt-0.5">info</span>
// <div>
// <p class="text-label-sm font-label-sm text-on-surface-variant leading-relaxed">
//                         Security Tip: Ensure you're on a secure network. AutoCharge will never ask for your password via email.
//                     </p>
// </div>
// </div>
// </div>
// </main>
// <!-- Footer Decoration -->
// <div class="fixed bottom-8 text-center w-full">
// <p class="text-caption-xs font-caption-xs text-outline tracking-[0.2em] uppercase opacity-50">
//             Secure Encryption Protocol v4.2.0
//         </p>
// </div>
// <script>
//         // Micro-interaction for OTP inputs
//         const inputs = document.querySelectorAll('.otp-input');

//         inputs.forEach((input, index) => {
//             input.addEventListener('input', (e) => {
//                 if (e.target.value.length === 1 && index < inputs.length - 1) {
//                     inputs[index + 1].focus();
//                 }
//             });

//             input.addEventListener('keydown', (e) => {
//                 if (e.key === 'Backspace' && !e.target.value && index > 0) {
//                     inputs[index - 1].focus();
//                 }
//             });
//         });

//         // Form submission pulse effect
//         document.getElementById('otp-form').addEventListener('submit', (e) => {
//             e.preventDefault();
//             const btn = e.target.querySelector('button[type="submit"]');
//             btn.innerHTML = '<span class="animate-spin material-symbols-outlined">sync</span>';
//             setTimeout(() => {
//                 btn.innerHTML = 'Verified <span class="material-symbols-outlined">check_circle</span>';
//                 btn.classList.replace('from-inverse-primary', 'from-secondary');
//                 btn.classList.replace('to-primary-container', 'to-secondary-container');
//             }, 1500);
//         });
//     </script>
// </body></html>
