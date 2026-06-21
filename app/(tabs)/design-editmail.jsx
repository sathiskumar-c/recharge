// <!DOCTYPE html><html class="dark" lang="en" style=""><head>
// <meta charset="utf-8">
// <meta content="width=device-width, initial-scale=1.0" name="viewport">
// <title>Edit Email - AutoCharge Pro</title>
// <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet">
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
// <style>
//         body {
//             font-family: 'Inter', sans-serif;
//             background-color: #131313;
//             color: #e5e2e1;
//             overflow-x: hidden;
//         }

//         .glass-card {
//             background: rgba(26, 26, 26, 0.7);
//             backdrop-filter: blur(24px);
//             -webkit-backdrop-filter: blur(24px);
//             border: 1px solid rgba(255, 255, 255, 0.08);
//         }

//         .obsidian-ultra-input {
//             background: rgba(14, 14, 14, 0.8);
//             border: 1px solid rgba(255, 255, 255, 0.1);
//             transition: all 0.3s ease;
//         }

//         .obsidian-ultra-input:focus {
//             border-color: #b3c5ff;
//             box-shadow: 0 0 15px rgba(179, 197, 255, 0.2);
//             outline: none;
//         }

//         .glow-button {
//             background: linear-gradient(135deg, #4b5d90 0%, #334576 100%);
//             box-shadow: 0 0 20px rgba(0, 85, 213, 0.4);
//             transition: transform 0.2s ease, box-shadow 0.2s ease;
//         }

//         .glow-button:active {
//             transform: scale(0.96);
//             box-shadow: 0 0 10px rgba(0, 85, 213, 0.2);
//         }

//         .material-symbols-outlined {
//             font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
//         }

//         .header-anchor {
//             backdrop-filter: blur(20px);
//             -webkit-backdrop-filter: blur(20px);
//         }
//     </style>
// <script id="tailwind-config">
//         tailwind.config = {
//             darkMode: "class",
//             theme: {
//                 extend: {
//                     "colors": {
//                         "surface-glass": "rgba(26, 26, 26, 0.7)",
//                         "surface-tint": "#b3c5ff",
//                         "on-tertiary-fixed-variant": "#653e00",
//                         "on-primary-fixed": "#011849",
//                         "surface-container-high": "#2a2a2a",
//                         "secondary-fixed": "#6ffbbe",
//                         "on-secondary-container": "#003e28",
//                         "primary": "#dbe2ff",
//                         "background": "#131313",
//                         "outline": "#8f909a",
//                         "tertiary-container": "#ffb95f",
//                         "on-surface-variant": "#c5c6d0",
//                         "tertiary-fixed-dim": "#ffb95f",
//                         "primary-fixed-dim": "#b3c5ff",
//                         "on-primary-fixed-variant": "#334576",
//                         "surface-bright": "#3a3939",
//                         "error-container": "#93000a",
//                         "inverse-on-surface": "#313030",
//                         "surface-container-low": "#1c1b1b",
//                         "tertiary-fixed": "#ffddb8",
//                         "on-primary-container": "#3f5183",
//                         "surface": "#131313",
//                         "border-white-low": "rgba(255, 255, 255, 0.08)",
//                         "inverse-surface": "#e5e2e1",
//                         "surface-container-highest": "#353534",
//                         "on-error-container": "#ffdad6",
//                         "on-background": "#e5e2e1",
//                         "secondary": "#4edea3",
//                         "secondary-container": "#00b47d",
//                         "on-surface": "#e5e2e1",
//                         "on-tertiary-container": "#754900",
//                         "on-secondary-fixed-variant": "#005236",
//                         "tertiary": "#ffddb8",
//                         "surface-dim": "#131313",
//                         "on-tertiary": "#472a00",
//                         "primary-container": "#b3c5ff",
//                         "outline-variant": "#45464f",
//                         "error": "#ffb4ab",
//                         "on-primary": "#1b2e5e",
//                         "secondary-fixed-dim": "#4edea3",
//                         "primary-fixed": "#dbe1ff",
//                         "surface-container": "#201f1f",
//                         "surface-container-lowest": "#0e0e0e",
//                         "inverse-primary": "#4b5d90",
//                         "surface-variant": "#353534",
//                         "glow-button": "rgba(0, 85, 213, 0.4)",
//                         "on-secondary": "#003824",
//                         "on-tertiary-fixed": "#2a1700",
//                         "on-secondary-fixed": "#002114",
//                         "on-error": "#690005",
//                         "glow-primary": "rgba(179, 197, 255, 0.4)"
//                     },
//                     "spacing": {
//                         "xl": "32px",
//                         "gutter": "16px",
//                         "unit": "4px",
//                         "xs": "4px",
//                         "sm": "8px",
//                         "md": "16px",
//                         "margin-mobile": "20px",
//                         "margin-desktop": "40px",
//                         "lg": "24px"
//                     },
//                     "fontFamily": {
//                         "body-md": ["Inter"],
//                         "label-sm": ["Inter"],
//                         "caption-xs": ["Inter"],
//                         "display-lg": ["Inter"],
//                         "headline-lg-mobile": ["Inter"],
//                         "headline-lg": ["Inter"],
//                         "data-bold": ["Inter"],
//                         "label-md": ["Inter"],
//                         "headline-md": ["Inter"]
//                     },
//                     "fontSize": {
//                         "body-md": ["16px", {"lineHeight": "24px", "letterSpacing": "0em", "fontWeight": "400"}],
//                         "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "500"}],
//                         "caption-xs": ["10px", {"lineHeight": "12px", "letterSpacing": "0.05em", "fontWeight": "700"}],
//                         "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.03em", "fontWeight": "700"}],
//                         "headline-lg-mobile": ["28px", {"lineHeight": "36px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
//                         "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
//                         "data-bold": ["18px", {"lineHeight": "24px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
//                         "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500"}],
//                         "headline-md": ["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}]
//                     }
//                 }
//             }
//         }
//     </script>
// </head>
// <body class="bg-background text-on-surface antialiased min-h-screen flex flex-col">
// <!-- Top App Bar -->
// <header class="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-md bg-surface-glass backdrop-blur-xl border-b border-border-white-low shadow-sm">
// <button aria-label="Go back" class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors active:scale-95">
// <span class="material-symbols-outlined text-on-surface">arrow_back</span>
// </button>
// <h1 class="font-headline-md text-headline-md font-bold text-primary tracking-tight">Edit Email</h1>
// <div class="relative w-10 h-10 rounded-full overflow-hidden border border-border-white-low hover:opacity-80 transition-opacity cursor-pointer">
// <img class="w-full h-full object-cover" data-alt="A professional close-up headshot of a person with short dark hair and a confident expression, set against a blurred, high-tech office background with soft blue and purple lighting. The aesthetic is modern and clean, consistent with a premium cybersecurity application. The lighting is crisp and cinematic, emphasizing technical expertise and reliability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9-qlUxLKwLW8DB2Rn0rWtO89ts4_KBu81L0cSKkky1wZfb6nRnSK1Y5NcwdIjFv8V-cZuNS6h4rX_PvJ1y1lyvvpi8oxy_YQAddaddsIyhiROP9QE9pNrU_VfTw_j4XA1_YUTRAdHNmUe6YCEdqYOjPvnXu3aHAesbG8v7JBNyBKuwbfadWURcVxfDIcMGv8ba99VFJyZ_ru4oFsSwC4sKr40tZSzqvtLR7d-IAwh9K2eXqJCMhJcXdtMqD7tkG8D8pwY1eKSyKA">
// </div>
// </header>
// <!-- Main Content -->
// <main class="flex-grow pt-32 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto w-full">
// <!-- Animation Context (Subtle background glow) -->
// <div class="fixed top-1/4 left-1/2 -translate-x-1/2 w-full h-[400px] pointer-events-none -z-10 opacity-30">

// </div>
// <div class="flex flex-col gap-xl">
// <!-- Instructions/Status -->
// <div class="space-y-sm">
// <p class="font-body-md text-body-md text-on-surface-variant">Update your primary account email. A verification code will be sent to the new address.</p>
// </div>
// <!-- Input Field Container -->
// <div class="space-y-md">
// <label class="font-label-md text-label-md text-on-surface-variant px-1" for="email-address">Email Address</label>
// <div class="relative"><input class="w-full h-14 px-md font-body-md text-body-md rounded-xl bg-surface-container-lowest border border-border-white-low text-on-surface transition-all duration-300 focus:border-primary-fixed-dim focus:ring-0" id="email-address" name="email_address" placeholder="Enter your new email" type="email" value="alex.h@autocharge.pro"><div class="absolute inset-y-0 right-md flex items-center pointer-events-none"><span class="material-symbols-outlined text-outline-variant">mail</span></div></div>
// <p class="font-caption-xs text-caption-xs text-outline-variant px-1 flex items-center gap-1">
// <span class="material-symbols-outlined text-[12px]">info</span>
//                     We use this for important security alerts.
//                 </p>
// </div>
// <!-- Visual Insight Banner -->
// <div class="bg-surface-glass p-md rounded-xl border-l-2 border-secondary bg-secondary/5 flex gap-md items-start"><div class="mt-1"><span class="material-symbols-outlined text-secondary">security</span></div><div><h4 class="font-label-md text-label-md text-secondary mb-xs">Identity Protection</h4><p class="font-body-md text-label-sm text-on-surface-variant">Your current session is secured. Changing your email requires a one-time verification step for your protection.</p></div></div>
// </div>
// </main>
// <!-- Fixed Bottom Action -->
// <footer class="fixed bottom-0 left-0 right-0 p-margin-mobile md:px-margin-desktop md:pb-xl bg-gradient-to-t from-background via-background/90 to-transparent">
// <div class="max-w-4xl mx-auto w-full">
// <button class="glow-button-primary w-full md:max-w-md py-lg rounded-xl flex items-center justify-center gap-sm group active:scale-95 transition-all" style="background: linear-gradient(135deg, rgb(75, 93, 144) 0%, rgb(179, 197, 255) 100%); box-shadow: rgba(0, 85, 213, 0.3) 0px 4px 20px;"><span class="font-data-bold text-data-bold text-on-primary">Save Changes</span><span class="material-symbols-outlined text-on-primary group-hover:translate-x-1 transition-transform text-[20px]">chevron_right</span></button>
// <div class="h-6 md:hidden"></div> <!-- Spacer for home indicator -->
// </div>
// </footer>
// <!-- Micro-interaction script -->
// <script>
//         document.addEventListener('DOMContentLoaded', () => {
//             const input = document.getElementById('email-address');

//             input.addEventListener('focus', () => {
//                 // Focus state is handled by CSS, but can add JS triggers here for animations
//             });

//             // Simulate navigation/success behavior
//             const saveBtn = document.querySelector('.glow-button');
//             saveBtn.addEventListener('click', (e) => {
//                 const originalContent = saveBtn.innerHTML;
//                 saveBtn.innerHTML = `
//                     <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
//                         <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Verifying...
//                 `;

//                 // Simulate delay before hypothetical redirect
//                 setTimeout(() => {
//                     console.log('Redirecting to SCREEN_12...');
//                     // In a real app: window.location.href = '/otp-verification';
//                     saveBtn.innerHTML = originalContent;
//                 }, 1500);
//             });
//         });
//     </script>

// </body></html>
