/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

module.exports = {
  content: ["src/**/!(*.stories|*.spec).{ts,html}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
