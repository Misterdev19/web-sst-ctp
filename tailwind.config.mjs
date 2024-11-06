/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			 colors:{
				 primary: '#bd3abf',
				 lite: '#f6d5f9',
				 dark: '#450d43'
			 }
		},
	},
	plugins: [],
}
