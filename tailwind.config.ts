
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Add custom theme colors used in the portfolio
				'navy-shadow': 'rgba(2, 12, 27, 0.7)',
				'navy-light': '#112240',
				'navy': '#0a192f',
				'navy-dark': '#020c1b',
				'slate': '#8892b0',
				'light-slate': '#a8b2d1',
				'lightest-slate': '#ccd6f6',
				'white': '#e6f1ff',
				'green': '#64ffda',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
				calibre: ['Calibre', 'Inter', 'San Francisco', 'SF Pro Text', 'sans-serif'],
				sfmono: ['SF Mono', 'Fira Code', 'JetBrains Mono', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': { 
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': { 
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'scale-in': {
					'0%': { 
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': { 
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'slide-in': {
					'0%': { 
						transform: 'translateY(20px)',
						opacity: '0' 
					},
					'100%': { 
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'slide-in-delayed': {
					'0%, 30%': { 
						transform: 'translateY(20px)',
						opacity: '0' 
					},
					'100%': { 
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'fade-in-left': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(-10px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'spin-slow': {
					'0%': { 
						transform: 'rotate(0deg)' 
					},
					'100%': { 
						transform: 'rotate(360deg)' 
					}
				},
				'appear': {
					'0%': {
						transform: 'translateY(10px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-out': 'fade-out 0.5s ease-out forwards',
				'scale-in': 'scale-in 0.3s ease-out forwards',
				'slide-in': 'slide-in 0.6s ease-out forwards',
				'slide-in-delayed': 'slide-in-delayed 0.8s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.5s ease-out forwards',
				'spin-slow': 'spin-slow 8s linear infinite',
				'appear': 'appear 0.5s ease-out forwards',
				'appear-delay-100': 'appear 0.5s ease-out 0.1s forwards',
				'appear-delay-200': 'appear 0.5s ease-out 0.2s forwards',
				'appear-delay-300': 'appear 0.5s ease-out 0.3s forwards',
				'appear-delay-400': 'appear 0.5s ease-out 0.4s forwards',
				'appear-delay-500': 'appear 0.5s ease-out 0.5s forwards',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
