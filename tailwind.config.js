/** @type {import('tailwindcss').Config} */
export default {
      content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
      ],
      darkMode: 'class',
      theme: {
            extend: {
                  colors: {
                        accent: {
                              primary: 'var(--accent-primary)',
                              secondary: 'var(--accent-secondary)',
                        }
                  },
                  fontFamily: {
                        // We can add custom fonts here
                  },
            },
      },
      plugins: [],
}
