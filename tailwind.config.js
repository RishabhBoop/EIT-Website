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
        hero: ['"Doto"'],
      },
    },
  },
  darkMode: "class", // for manual toggling
  //   darkMode: "media",
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
