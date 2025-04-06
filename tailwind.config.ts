
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
				// New custom colors
				'accent-pink': '#FF498B',
				'accent-purple': '#9945FF',
				'accent-blue': '#14F195',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
				'display': ['Raleway', 'sans-serif'],
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
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'gradient-shift': {
					'0%': { 
						backgroundPosition: '0% 50%' 
					},
					'50%': { 
						backgroundPosition: '100% 50%' 
					},
					'100%': { 
						backgroundPosition: '0% 50%' 
					}
				},
				'text-blur-out': {
					'0%': { 
						filter: 'blur(0.01)' 
					},
					'100%': { 
						filter: 'blur(12px) opacity(0%)' 
					}
				},
				'text-blur-in': {
					'0%': { 
						filter: 'blur(12px) opacity(0%)' 
					},
					'100%': { 
						filter: 'blur(0.01)' 
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
				'float': 'float 3s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 3s ease infinite',
				'text-blur-out': 'text-blur-out 1.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
				'text-blur-in': 'text-blur-in 1.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
