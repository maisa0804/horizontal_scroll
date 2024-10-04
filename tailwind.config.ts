import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      clipPath: {
        'clip-bottom': 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
        'clip-full': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
      },
      lineHeight: {
        '0.8': '0.8',
      },
    },
  },
  plugins: [
    ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void; }) => {
    addUtilities({
      '.clip-bottom': {
        'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
      },
      '.clip-full': {
        'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      },
    });
  }
  ],
};
export default config;
