# Tailwind CSS Production Build Issue

This repository demonstrates a bug where Tailwind CSS classes are missing from the production build, even after using PurgeCSS. The issue is component-specific and does not affect all parts of the application. The `bug.js` file shows the problematic component and the `bugSolution.js` demonstrates a solution to solve the issue.

## Steps to reproduce:

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run build` to create a production build.
4. Observe that the specific component in `bug.js` is missing Tailwind CSS classes in the production build, while other components in the site work correctly.

## Solution:

The solution is outlined in `bugSolution.js`, which shows how correctly configuring the `content` option in `tailwind.config.js` helps resolve the issue.  Ensure that your Tailwind configuration correctly identifies all the files where your Tailwind classes are used. This often involves updating the `content` array in your `tailwind.config.js` file to include all relevant source files. If you are using a framework like Next.js, be sure to follow their specific instructions for configuring Tailwind.