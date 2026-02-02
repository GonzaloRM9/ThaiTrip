/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    DEFAULT: '#FFD700',
                    light: '#FFE55C', // Estimated lighter shade
                    dark: '#C5A000',
                },
                royal: {
                    DEFAULT: '#242068',
                },
                temple: {
                    red: '#A61C3C',
                },
                emerald: {
                    DEFAULT: '#00A693',
                },
                sand: {
                    DEFAULT: '#FDFBF7',
                },
                ocean: {
                    DEFAULT: '#0F172A', // Keeping for legacy/darker blue
                }
            },
            fontFamily: {
                main: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            boxShadow: {
                'gold': '0 4px 14px 0 rgba(255, 215, 0, 0.3)',
            }
        },
    },
    plugins: [],
}
