const getPreset = () => {
  if (!process.env.NEXT_PUBLIC_TENANT)
    return [require(`./tailwind/default/preset.js`)];

  try {
    return [require(`./tailwind/${process.env.NEXT_PUBLIC_TENANT}/preset.js`)];
  } catch (err) {
    return [require(`./tailwind/default/preset.js`)];
  }
};

module.exports = {
  presets: getPreset(),
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
