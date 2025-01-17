/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        sm: "600px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 640px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
};
