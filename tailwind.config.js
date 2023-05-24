module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./components/Cards/**/*.{js,jsx,ts,tsx}",

    "./pages/index.js",
    "./layouts/**/*.{js,jsx,ts,tsx}",

    // "./pages/auth/login.js",
  ],
  theme: {
    extend: {
      colors: {
        blueGray: {
          50: "#fdf8f6",
          100: "#E2E8F0",
          200: "#E2E8F0",
          300: "#E2E8F0",
          400: "#94a3b8",
          500: "#647498",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#43302b",
        },
      },
    },
  },
  plugins: [],
};
