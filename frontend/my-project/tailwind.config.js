import flowbite from "flowbite/plugin";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: [
    "./node_modules/flowbite-react/**/*.js", // Flowbite React components
    "./layouts/**/*.html", 
    "./content/**/*.md", 
    "./content/**/*.html", 
    "./src/**/*.js", 
    "./src/**/*.jsx",
    "./node_modules/flowbite/**/*.js", // Flowbite core components
  ],
  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-gray-200',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg'
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    flowbite, // Flowbite plugin
    scrollbarHide, // Tailwind Scrollbar Hide plugin
  ],
};
