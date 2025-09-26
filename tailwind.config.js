
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Scan all files in src/ for Tailwind classes
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Define custom colors or fonts here for a unique hackathon look
      colors: {
        'primary-teal': '#10b981', // Your main highlight color
        'dark-bg': '#111827',
      }
    },
  },
  plugins: [],
}
