module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: { config: "./config/tailwind.config.cjs" },
    autoprefixer: {},
  },
};
