/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
    },
    colors: {
      dark1: 'hsl(198, 63%, 30%)',
      dark2: 'hsl(196, 76%, 11%)',
      light1: 'hsl(198, 64%, 83%)',
      light2: 'hsl(199, 64%, 91%)',
      white: 'hsl(0, 0%, 100%)',
      black: 'hsl(0, 0%, 0%)',
      accent1: 'hsl(31 100% 45%)',
      gray1: 'hsl(198, 0%, 14.51%)',
      gray2: 'hsl(198, 0%, 34.9%)',
      gray3: 'hsl(198, 0%, 54.9%)',
      gray4: 'hsl(198, 0%, 83%)',
    },
    maxWidth: {
      paragraph: '65ch',
    },
    gridTemplateColumns: {
      features: 'repeat(3, minmax(20ch, 50ch))',
    },
    extend: {
      backgroundImage: {
        checkmark: 'url("/public/image/list-style-checkmark.svg")',
        arrow: 'url("/public/image/list-style-arrow.svg")',
      },
    },
  },
  plugins: [],
};
