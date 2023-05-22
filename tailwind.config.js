/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['dist/*html'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Kumbh Sans', 'sans-serif'],
			},
			colors: {
				veryDarkDesaturatedBlue: 'hsl(238, 29%, 16%)',
				veryDarkGrayishBlue: 'hsl(237, 12%, 33%)',
				darkGrayishBlue: 'hsl(240, 6%, 50%)',
				lightGrayishBlue: '(240, 6%, 91%)',
				softRed: 'hsl(14, 88%, 65%)',
				softViolet: 'hsl(273, 75%, 65%)',
				softBlue: 'hsl(240, 73%, 65%)',
			},
		},
	},
	plugins: [],
};
