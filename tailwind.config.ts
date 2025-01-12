import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                float1: "float 2s ease-in-out infinite",
                float2: "float 3s ease-in-out infinite",
                float3: "float 2.5s ease-in-out infinite",
                float4: "float 4s ease-in-out infinite",
            },
           keyframes: {
  float: {
    "0%": { transform: "translate(0, 0) scale(1)" },
    "25%": { transform: "translate(10px, -10px) scale(1.1)" },
    "50%": { transform: "translate(-10px, 10px) scale(1.3)" },
    "75%": { transform: "translate(10px, -10px) scale(1.1)" },
    "100%": { transform: "translate(0, 0) scale(1)" },
  },
},
            colors: {
                customDark: "rgba(4, 4, 4, 0.8)",
            },
            width: {
                fit: "fit-content",
            },
            height: {
                fit: "fit-content",
            },
            objectFit: {
                contain: "contain",
                cover: "cover",
                fill: "fill",
                none: "none",
                "scale-down": "scale-down",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },

    plugins: [],

  safelist: [
    'animate-float1',
    'animate-float2',
    'animate-float3',
    'animate-float4',
  ],
};
export default config;
