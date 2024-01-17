import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
      },
      textColor: {
        primary: "var(--color-text-primary)"
      },
      colors: {
        accent: 'var(--color-accent)'
      }
    },
  },
  plugins: [],
}
export default config
