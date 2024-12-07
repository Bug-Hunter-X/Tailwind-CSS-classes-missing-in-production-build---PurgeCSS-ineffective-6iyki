The issue was caused by an incorrect configuration of the PurgeCSS plugin in my `tailwind.config.js` file. The `content` array, which specifies the source files to scan for Tailwind classes, was missing crucial files.  By adding the necessary paths, PurgeCSS correctly identified all classes and included them in the production build.

```javascript
// tailwind.config.js
module.exports = {
  content: [ 
    './src/**/*.{js,jsx,ts,tsx}', // Added missing paths
    './components/**/*.{html,js}', // Added missing paths
    './pages/**/*.{js,ts,jsx,tsx}' // Added missing paths
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

By correctly defining the `content` array, I ensured that PurgeCSS could effectively scan all my source files and prevent the removal of necessary Tailwind CSS classes during the production build.