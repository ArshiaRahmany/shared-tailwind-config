// Individual named exports
module.exports.content = ["./src/**/*.{js,jsx,ts,tsx}"];
module.exports.darkMode = false;
module.exports.safelist = [
  {
    pattern: /[\w-/:]+(?=\s|$)/g,
  },
];
module.exports.theme = {
  extend: {
    colors: {
      "riton-primary": "#48A4EA",
      "riton-primary-hover": "#4194D3",
      "riton-secondary": "#48A4EA1A",
      "riton-secondary-hover": "#48A4EA26",
      "riton-success": "#43A824",
      "riton-success-hover": "#3C9820",
      "riton-danger": "#F1380E",
      "riton-danger-hover": "#D9330D",
      "riton-warning": "#FF9500",
      "riton-warning-hover": "#E68600",
    },
  },
};
module.exports.variants = {
  extend: {},
};
module.exports.plugins = [];
