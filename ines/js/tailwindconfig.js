tailwind.config = {
  theme: {
    extend: {
      colors: {
        eerieblack: "#252525",
        rufous: "#a12017",
        ivory: "#f5fbef",
        resedagreen: "#748b75",
        cambridgeblue: "#92ad94",
        slategray: "#828a95",
      },
    },
  },
  variants: {
    extend: {
      translate: ["peer-checked"],
      backgroundColor: ["peer-checked"],
    },
  },
};
