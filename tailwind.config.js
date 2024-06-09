// tailwind.config.js
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          arial: ['Arial', 'sans-serif'],
          times: ['Times New Roman', 'Times', 'serif'],
          roboto: ['Roboto', 'sans-serif'],
          georgia: ['Georgia', 'serif'],
          courier: ['Courier New', 'monospace'],
        },
        colors:{
          customBlack: 'rgb(200,204,153)'
        }
      },
    },
    plugins: [],
  };