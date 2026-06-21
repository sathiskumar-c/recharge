// <!DOCTYPE html>

// <html class="dark" lang="en"><head>
// <meta charset="utf-8"/>
// <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
// <title>AutoCharge - Identity Verified</title>
// <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
// <style>
//         body {
//             font-family: 'Inter', sans-serif;
//             background-color: #131313; /* surface-dim */
//             color: #e5e2e1; /* on-surface */
//         }

//         .glass-card {
//             background-color: rgba(26, 26, 26, 0.7); /* surface-glass */
//             backdrop-filter: blur(24px);
//             -webkit-backdrop-filter: blur(24px);
//             border: 1px solid rgba(255, 255, 255, 0.08); /* border-white-low */
//         }

//         .success-glow {
//             box-shadow: 0 0 40px rgba(78, 222, 163, 0.3); /* secondary */
//         }

//         .btn-glow {
//             box-shadow: 0 0 20px rgba(0, 85, 213, 0.4); /* glow-button */
//         }

//         /* Particle animation setup */
//         .particle {
//             position: absolute;
//             background: #4edea3; /* secondary */
//             border-radius: 50%;
//             opacity: 0;
//             animation: float-up 3s ease-out infinite;
//         }

//         @keyframes float-up {
//             0% {
//                 transform: translateY(0) scale(0);
//                 opacity: 0;
//             }
//             20% {
//                 opacity: 0.8;
//             }
//             100% {
//                 transform: translateY(-100px) scale(1.5);
//                 opacity: 0;
//             }
//         }

//         /* Pulse rings */
//         .pulse-ring {
//             position: absolute;
//             border-radius: 50%;
//             border: 2px solid #4edea3; /* secondary */
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//             opacity: 0;
//             animation: pulse 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
//         }

//         .pulse-ring:nth-child(2) {
//             animation-delay: 0.5s;
//         }

//         @keyframes pulse {
//             0% {
//                 width: 60px;
//                 height: 60px;
//                 opacity: 0.8;
//             }
//             100% {
//                 width: 200px;
//                 height: 200px;
//                 opacity: 0;
//             }
//         }
//     </style>
// <script id="tailwind-config">
//         tailwind.config = {
//           darkMode: "class",
//           theme: {
//             extend: {
//               "colors": {
//                       "surface-dim": "#131313",
//                       "on-secondary-fixed": "#002114",
//                       "tertiary-fixed-dim": "#ffb95f",
//                       "surface": "#131313",
//                       "surface-container": "#201f1f",
//                       "on-primary-fixed-variant": "#334576",
//                       "surface-container-high": "#2a2a2a",
//                       "on-background": "#e5e2e1",
//                       "surface-container-highest": "#353534",
//                       "primary-fixed-dim": "#b3c5ff",
//                       "on-secondary-container": "#003e28",
//                       "surface-variant": "#353534",
//                       "surface-container-low": "#1c1b1b",
//                       "primary-fixed": "#dbe1ff",
//                       "on-tertiary-fixed-variant": "#653e00",
//                       "on-primary-fixed": "#011849",
//                       "inverse-primary": "#4b5d90",
//                       "on-primary": "#1b2e5e",
//                       "primary-container": "#b3c5ff",
//                       "outline-variant": "#45464f",
//                       "outline": "#8f909a",
//                       "error": "#ffb4ab",
//                       "glow-primary": "rgba(179, 197, 255, 0.4)",
//                       "tertiary-fixed": "#ffddb8",
//                       "on-surface": "#e5e2e1",
//                       "inverse-on-surface": "#313030",
//                       "secondary-fixed-dim": "#4edea3",
//                       "error-container": "#93000a",
//                       "on-tertiary-container": "#754900",
//                       "background": "#131313",
//                       "surface-container-lowest": "#0e0e0e",
//                       "on-secondary-fixed-variant": "#005236",
//                       "border-white-low": "rgba(255, 255, 255, 0.08)",
//                       "tertiary": "#ffddb8",
//                       "on-tertiary-fixed": "#2a1700",
//                       "surface-tint": "#b3c5ff",
//                       "secondary-fixed": "#6ffbbe",
//                       "on-tertiary": "#472a00",
//                       "tertiary-container": "#ffb95f",
//                       "primary": "#dbe2ff",
//                       "inverse-surface": "#e5e2e1",
//                       "on-surface-variant": "#c5c6d0",
//                       "secondary": "#4edea3",
//                       "surface-glass": "rgba(26, 26, 26, 0.7)",
//                       "glow-button": "rgba(0, 85, 213, 0.4)",
//                       "on-error": "#690005",
//                       "secondary-container": "#00b47d",
//                       "on-secondary": "#003824",
//                       "on-primary-container": "#3f5183",
//                       "surface-bright": "#3a3939",
//                       "on-error-container": "#ffdad6"
//               },
//               "borderRadius": {
//                       "DEFAULT": "0.25rem",
//                       "lg": "0.5rem",
//                       "xl": "0.75rem",
//                       "full": "9999px"
//               },
//               "spacing": {
//                       "gutter": "16px",
//                       "unit": "4px",
//                       "margin-desktop": "40px",
//                       "lg": "24px",
//                       "margin-mobile": "20px",
//                       "xl": "32px",
//                       "sm": "8px",
//                       "md": "16px",
//                       "xs": "4px"
//               },
//               "fontFamily": {
//                       "label-md": ["Inter"],
//                       "data-bold": ["Inter"],
//                       "caption-xs": ["Inter"],
//                       "label-sm": ["Inter"],
//                       "headline-lg-mobile": ["Inter"],
//                       "headline-md": ["Inter"],
//                       "headline-lg": ["Inter"],
//                       "display-lg": ["Inter"],
//                       "body-md": ["Inter"]
//               },
//               "fontSize": {
//                       "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500" }],
//                       "data-bold": ["18px", { "lineHeight": "24px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
//                       "caption-xs": ["10px", { "lineHeight": "12px", "letterSpacing": "0.05em", "fontWeight": "700" }],
//                       "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "500" }],
//                       "headline-lg-mobile": ["28px", { "lineHeight": "36px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
//                       "headline-md": ["24px", { "lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
//                       "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
//                       "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.03em", "fontWeight": "700" }],
//                       "body-md": ["16px", { "lineHeight": "24px", "letterSpacing": "0em", "fontWeight": "400" }]
//               }
//             }
//           }
//         }
//     </script>
// <style>
//     body {
//       min-height: max(884px, 100dvh);
//     }
//   </style>
//   </head>
// <body class="bg-surface-dim text-on-surface min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
// <!-- Background Ambient Glow -->
// <div class="absolute inset-0 pointer-events-none flex items-center justify-center">
// <div class="w-[300px] h-[300px] bg-secondary opacity-10 rounded-full blur-[100px]"></div>
// </div>
// <!-- Main Container -->
// <main class="w-full max-w-md px-margin-mobile md:px-margin-desktop relative z-10 flex flex-col items-center">
// <!-- Success Visual -->
// <div class="relative w-40 h-40 flex items-center justify-center mb-xl">
// <!-- Pulsing Rings -->
// <div class="pulse-ring"></div>
// <div class="pulse-ring"></div>
// <!-- Glass Center -->
// <div class="relative z-10 w-24 h-24 rounded-full glass-card flex items-center justify-center success-glow">
// <span class="material-symbols-outlined text-secondary" style="font-size: 48px; font-variation-settings: 'FILL' 1;">check_circle</span>
// </div>
// <!-- Particles Container -->
// <div class="absolute inset-0 pointer-events-none" id="particles"></div>
// </div>
// <!-- Typography -->
// <div class="text-center mb-xl">
// <h1 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-sm">Identity Verified</h1>
// <p class="font-body-md text-body-md text-on-surface-variant max-w-[280px] mx-auto">
//                 Your changes have been securely saved and your profile is now up to date.
//             </p>
// </div>
// <!-- Action Button -->
// <button class="w-full h-14 rounded-xl bg-gradient-to-r from-inverse-primary to-primary-container text-white font-label-md text-label-md flex items-center justify-between px-lg btn-glow hover:brightness-110 active:scale-95 transition-all duration-200">
// <span class="font-semibold text-on-primary">Return to Dashboard</span>
// <span class="material-symbols-outlined text-on-primary">chevron_right</span>
// </button>
// <!-- Safe Area Spacer for Mobile -->
// <div class="h-8 md:hidden"></div>
// </main>
// <script>
//         // Simple particle generator
//         const particlesContainer = document.getElementById('particles');
//         const numParticles = 12;

//         for (let i = 0; i < numParticles; i++) {
//             const particle = document.createElement('div');
//             particle.classList.add('particle');

//             // Randomize position, size, and delay
//             const size = Math.random() * 6 + 2; // 2px to 8px
//             const angle = Math.random() * Math.PI * 2;
//             const distance = Math.random() * 30 + 30; // 30px to 60px from center

//             const x = Math.cos(angle) * distance + 80; // 80 is center of 160px container
//             const y = Math.sin(angle) * distance + 80;

//             particle.style.width = `${size}px`;
//             particle.style.height = `${size}px`;
//             particle.style.left = `${x}px`;
//             particle.style.top = `${y}px`;
//             particle.style.animationDelay = `${Math.random() * 2}s`;

//             particlesContainer.appendChild(particle);
//         }
//     </script>
// </body></html>
