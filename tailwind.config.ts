import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				text: "text 2s ease infinite",
				wave: "wave 2s ease-in infinite",
			},
			keyframes: {
				text: {
					"0%, 100%": {
						"background-size": "250% 250%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "250% 250%",
						"background-position": "center right",
					},
				},
				wave: {
					"0%": {
						transform: "skewY(-1deg)",
					},
					"50%": {
						transform: "skewY(1deg)",
					},
					"100%": {
						transform: "skewY(-1deg)",
					},
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
