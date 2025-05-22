const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        doto: ['var(--font-doto)', 'sans-serif'], // Changed to use CSS variable
        montserrat: ['Montserrat'], // Assuming Montserrat might be used later or via direct CSS
        ubuntu: ['var(--font-ubuntu)', 'sans-serif'],
      },
    },
  },
  darkMode: "class", // for manual toggling
  plugins: [
    heroui({
		themes: {
			dark: {
			  colors: {
				primary: {
				  DEFAULT: "#7f9832",
				},
				danger: {
					DEFAULT: "#730202"
				}
			  },
			},
		  },
    }),
	require("tailwindcss-animate"),
	require('tailwind-scrollbar-hide')
  ],
};
