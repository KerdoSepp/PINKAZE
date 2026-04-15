import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default {
  content: ["./index.html","./tours.html", "./src/**/*.{js,ts,html}"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
      },
    },
  },
  plugins: [tailwindcss()],
}