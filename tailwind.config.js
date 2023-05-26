/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				lightGray: '#F1F0EB',
				darkColor: '#1C1D1D',
				darkerColor: '#0E0F14',
				lightgreen: '#14CF93',
				brick: '#CD505A',
			},
			animation: {
				'spin-slow': 'spin 10s linear infinite',
			},
		},
		screens: {
			xs: '350px',
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		fontFamily: {
			playfair: ['Playfair Display', 'serif'],
			quicksand: ['Quicksand', 'sans-serif'],
			raleway: ['Raleway', 'sans-serif'],
			dance: ['Dancing Script', 'cursive'],
		},
	},
	plugins: [],
};
