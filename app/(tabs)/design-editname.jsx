// <!DOCTYPE html><html class="dark" lang="en" style=""><head>
// <meta charset="utf-8">
// <meta content="width=device-width, initial-scale=1.0" name="viewport">
// <title>AutoCharge - Edit Name</title>
// <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet">
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
// <!-- Tailwind Configuration -->
// <script id="tailwind-config">
//       tailwind.config = {
//         darkMode: "class",
//         theme: {
//           extend: {
//             "colors": {
//                     "surface-glass": "rgba(26, 26, 26, 0.7)",
//                     "surface-tint": "#b3c5ff",
//                     "on-tertiary-fixed-variant": "#653e00",
//                     "on-primary-fixed": "#011849",
//                     "surface-container-high": "#2a2a2a",
//                     "secondary-fixed": "#6ffbbe",
//                     "on-secondary-container": "#003e28",
//                     "primary": "#dbe2ff",
//                     "background": "#131313",
//                     "outline": "#8f909a",
//                     "tertiary-container": "#ffb95f",
//                     "on-surface-variant": "#c5c6d0",
//                     "tertiary-fixed-dim": "#ffb95f",
//                     "primary-fixed-dim": "#b3c5ff",
//                     "on-primary-fixed-variant": "#334576",
//                     "surface-bright": "#3a3939",
//                     "error-container": "#93000a",
//                     "inverse-on-surface": "#313030",
//                     "surface-container-low": "#1c1b1b",
//                     "tertiary-fixed": "#ffddb8",
//                     "on-primary-container": "#3f5183",
//                     "surface": "#131313",
//                     "border-white-low": "rgba(255, 255, 255, 0.08)",
//                     "inverse-surface": "#e5e2e1",
//                     "surface-container-highest": "#353534",
//                     "on-error-container": "#ffdad6",
//                     "on-background": "#e5e2e1",
//                     "secondary": "#4edea3",
//                     "secondary-container": "#00b47d",
//                     "on-surface": "#e5e2e1",
//                     "on-tertiary-container": "#754900",
//                     "on-secondary-fixed-variant": "#005236",
//                     "tertiary": "#ffddb8",
//                     "surface-dim": "#131313",
//                     "on-tertiary": "#472a00",
//                     "primary-container": "#b3c5ff",
//                     "outline-variant": "#45464f",
//                     "error": "#ffb4ab",
//                     "on-primary": "#1b2e5e",
//                     "secondary-fixed-dim": "#4edea3",
//                     "primary-fixed": "#dbe1ff",
//                     "surface-container": "#201f1f",
//                     "surface-container-lowest": "#0e0e0e",
//                     "inverse-primary": "#4b5d90",
//                     "surface-variant": "#353534",
//                     "glow-button": "rgba(0, 85, 213, 0.4)",
//                     "on-secondary": "#003824",
//                     "on-tertiary-fixed": "#2a1700",
//                     "on-secondary-fixed": "#002114",
//                     "on-error": "#690005",
//                     "glow-primary": "rgba(179, 197, 255, 0.4)"
//             },
//             "borderRadius": {
//                     "DEFAULT": "0.25rem",
//                     "lg": "0.5rem",
//                     "xl": "0.75rem",
//                     "full": "9999px"
//             },
//             "spacing": {
//                     "xl": "32px",
//                     "gutter": "16px",
//                     "unit": "4px",
//                     "xs": "4px",
//                     "sm": "8px",
//                     "md": "16px",
//                     "margin-mobile": "20px",
//                     "margin-desktop": "40px",
//                     "lg": "24px"
//             },
//             "fontFamily": {
//                     "body-md": ["Inter"],
//                     "label-sm": ["Inter"],
//                     "caption-xs": ["Inter"],
//                     "display-lg": ["Inter"],
//                     "headline-lg-mobile": ["Inter"],
//                     "headline-lg": ["Inter"],
//                     "data-bold": ["Inter"],
//                     "label-md": ["Inter"],
//                     "headline-md": ["Inter"]
//             },
//             "fontSize": {
//                     "body-md": ["16px", {"lineHeight": "24px", "letterSpacing": "0em", "fontWeight": "400"}],
//                     "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "500"}],
//                     "caption-xs": ["10px", {"lineHeight": "12px", "letterSpacing": "0.05em", "fontWeight": "700"}],
//                     "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.03em", "fontWeight": "700"}],
//                     "headline-lg-mobile": ["28px", {"lineHeight": "36px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
//                     "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
//                     "data-bold": ["18px", {"lineHeight": "24px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
//                     "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500"}],
//                     "headline-md": ["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}]
//             }
//           },
//         },
//       }
//     </script>
// <style>
//         body {
//             background-color: #131313;
//             color: #e5e2e1;
//             font-family: 'Inter', sans-serif;
//             overflow-x: hidden;
//         }

//         .glass-input-container {
//             background: rgba(26, 26, 26, 0.7);
//             backdrop-filter: blur(24px);
//             border: 1px solid rgba(255, 255, 255, 0.08);
//             transition: border-color 0.3s ease, box-shadow 0.3s ease;
//         }

//         .glass-input-container:focus-within {
//             border-color: #b3c5ff;
//             box-shadow: 0 0 15px rgba(179, 197, 255, 0.2);
//         }

//         .glow-button-primary {
//             background: linear-gradient(135deg, #4b5d90 0%, #b3c5ff 100%);
//             box-shadow: 0 0 20px rgba(0, 85, 213, 0.4);
//             transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease;
//         }

//         .glow-button-primary:active {
//             transform: scale(0.95);
//         }

//         .material-symbols-outlined {
//             font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
//         }

//         .bg-gradient-mesh {
//             background: radial-gradient(circle at 50% -20%, rgba(179, 197, 255, 0.15), transparent 60%),
//                         radial-gradient(circle at 0% 100%, rgba(78, 222, 163, 0.05), transparent 40%);
//         }
//     </style>
// </head>
// <body class="bg-background min-h-screen flex flex-col items-center selection:bg-primary-container selection:text-on-primary-container">
// <!-- Atmospheric Background Overlay -->
// <div class="fixed inset-0 bg-gradient-mesh pointer-events-none z-0"></div>
// <!-- Top App Bar (Shared Structure) -->
// <header class="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-border-white-low bg-surface-glass shadow-sm flex justify-between items-center px-margin-mobile md:px-margin-desktop py-md">
// <button class="flex items-center justify-center p-2 rounded-full hover:bg-surface-container-high transition-colors active:scale-95">
// <span class="material-symbols-outlined text-primary text-[24px]">arrow_back</span>
// </button>
// <h1 class="font-headline-md text-headline-md font-bold text-primary tracking-tight">Edit Name</h1>
// <div class="w-10 h-10 rounded-full border border-border-white-low overflow-hidden bg-surface-container shadow-sm active:scale-95 transition-transform cursor-pointer">
// <img class="w-full h-full object-cover" data-alt="A cinematic, high-detail portrait of a modern professional user profile. The person has a neutral, confident expression, set against a dark obsidian tech-inspired background with subtle electric blue rim lighting. The style is clean, premium, and futuristic, aligning with the Cyber-Premium Glassmorphism aesthetic of the AutoCharge brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtBjQxgp2_JkWGu4tU4I3p2UNfO5kgZIluJnXduvhZy2NSlFTJ-Kc4RkqXaUTp0r5WNJ3F5XAP0WDMff99Uy_q90pyr7zYPVI0WDr7ki7sS-wNOIrVkkcAowhcJpHcjH6inc0Av9QDC_w0DR-xnUMNDlVwqF52eYnvT_muWNtJU5phY8wzaJB1UDpWPZ-J9JJKRTtqhTMF3ll3Q0CDil0HgRZsijUlbyiDVW1FYkw2wwxbufv1sD0lzw5ougjRVkq97_sDrR3DA7Q">
// </div>
// </header>
// <!-- Main Content Canvas -->
// <main class="flex-1 w-full max-w-4xl px-margin-mobile md:px-margin-desktop pt-[100px] pb-[120px] z-10">
// <div class="flex flex-col gap-xl">
// <!-- Focused Input Section -->
// <div class="flex flex-col gap-sm">
// <label class="font-label-md text-label-md text-on-surface-variant px-1" for="full_name">
//                     Full Name
//                 </label>
// <div class="relative">
// <input class="w-full h-14 px-md font-body-md text-body-md rounded-xl bg-surface-container-lowest border border-border-white-low text-on-surface transition-all duration-300 focus:border-primary-fixed-dim focus:ring-0" id="full_name" name="full_name" placeholder="Enter your name" type="text" value="Alex Henderson">
// <div class="absolute inset-y-0 right-md flex items-center pointer-events-none">
// <span class="material-symbols-outlined text-outline-variant">person</span>
// </div>
// </div>
// <p class="font-caption-xs text-caption-xs text-outline px-1 opacity-60">
//                     This is how your name will appear across the AutoCharge ecosystem.
//                 </p>
// </div>
// <!-- Optional Insight (Subtle guidance, adhering to minimal prompt) -->
// <div class="bg-surface-container p-md rounded-xl border-l-2 border-secondary flex gap-md items-start transition-all">
// <div class="mt-1">
// <span class="material-symbols-outlined text-secondary">security</span>
// </div>
// <div>
// <h4 class="font-label-md text-label-md text-secondary mb-xs">Identity Protection</h4>
// <p class="font-body-md text-label-sm text-on-surface-variant">Your current session is secured. Changing your name requires a one-time verification step for your protection.</p>
// </div>
// </div>
// </div>
// </main>
// <!-- Fixed Bottom Action Area -->
// <footer class="fixed bottom-0 left-0 right-0 p-margin-mobile md:px-margin-desktop pb-xl md:pb-xl z-50 pointer-events-none">
// <div class="max-w-4xl mx-auto w-full flex justify-center pointer-events-auto">
// <button class="glow-button-primary w-full md:max-w-md py-lg rounded-xl flex items-center justify-center gap-sm group active:scale-95 transition-all" style="background: linear-gradient(135deg, rgb(75, 93, 144) 0%, rgb(179, 197, 255) 100%); box-shadow: rgba(0, 85, 213, 0.3) 0px 4px 20px;"><span class="font-data-bold text-data-bold text-on-primary">Save Changes</span><span class="material-symbols-outlined text-on-primary group-hover:translate-x-1 transition-transform text-[20px]">chevron_right</span></button>
// </div>
// </footer>
// <!-- Micro-interaction Script -->
// <script>
//         document.addEventListener('DOMContentLoaded', () => {
//             const input = document.getElementById('full_name');
//             const saveBtn = document.querySelector('.glow-button-primary');

//             // Visual feedback on focus
//             input.addEventListener('focus', () => {
//                 // Potential for adding micro-sounds or subtle haptic triggers if supported
//             });

//             // Simulate save interaction
//             saveBtn.addEventListener('click', (e) => {
//                 const btnContent = saveBtn.querySelector('span:first-child');
//                 const btnIcon = saveBtn.querySelector('.material-symbols-outlined');

//                 btnContent.textContent = "Updating...";
//                 btnIcon.textContent = "autorenew";
//                 btnIcon.classList.add('animate-spin');

//                 setTimeout(() => {
//                     btnContent.textContent = "Saved";
//                     btnIcon.textContent = "done_all";
//                     btnIcon.classList.remove('animate-spin');
//                     saveBtn.style.background = "linear-gradient(135deg, #00b47d 0%, #4edea3 100%)";
//                     saveBtn.style.boxShadow = "0 0 30px rgba(78, 222, 163, 0.4)";
//                 }, 1200);
//             });
//         });
//     </script>

// </body></html>
