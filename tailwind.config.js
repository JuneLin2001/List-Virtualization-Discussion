/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        VirtualizationListItem: "#fceed2",
        RegularListItem: "#d3e3fd",
      },
    },
  },
  plugins: [],
};
