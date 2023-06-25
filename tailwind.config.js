/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				accent: "#CDA274",
				accentDark: "#c28442",
				primary: "#292F36",
				secondary: "#4D5053",
				light: "#F4F0EC",
			},
		},
	},
	plugins: [],
};
