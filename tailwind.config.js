module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Add this if you use a src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        'header': ['var(--font-header)'],
        'body': ['var(--font-body)'],
      },
    },
  },
}