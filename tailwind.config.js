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
      "riton-gray": "#F4F4F5",
      "riton-gray-hover": "#EEEEEF",
      "riton-secondary-hover": "#48A4EA26",
      "riton-success": "#43A824",
      "riton-success-hover": "#3C9820",
      "riton-success-secondary": "#43A8240D",
      "riton-success-secondary-hover": "#43A82414",
      "riton-danger": "#F1380E",
      "riton-danger-hover": "#D9330D",
      "riton-danger-secondary": "#F1380E0D",
      "riton-danger-secondary-hover": "#F1380E14",
      "riton-warning": "#FF9500",
      "riton-warning-hover": "#E68600",
      "riton-warning-secondary": "#FF95000D",
      "riton-warning-secondary-hover": "#FF950014",
    },
  },
};
module.exports.variants = {
  extend: {},
};
module.exports.plugins = [];
