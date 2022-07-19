# Chubb Components

This is a [Next.js](https://nextjs.org/) project bootstrapped with [Storybook](https://github.com/storybookjs/storybook/).

## Getting Started

```bash
npm install
```

You might have to initially build the app:

```bash
npm run build
```

Then, try running the Storybook development server:

```bash
npm run storybook
```

[http://localhost:6006](http://localhost:6006) should open automatically.

You can start adding/editing Storybook components inside `src/stories`.

## Deployment of Storybook

To create a build run:
```bash
 npm run build-storybook   
```

And then once your build is complete to deploy the build run:
```bash
 npx chromatic <project-token-goes-here>
```
## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

To learn more about other dependencies in this project here is some documentation
-   [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction) - learn about how storybook works with react.
-   [Storybook with Jest](https://storybook.js.org/addons/@storybook/addon-jest) - Storybook and Jest Testing.
-   [Tailwind CSS](https://tailwindcss.com/docs/installation) - Docs for learning about using Tailwind and there custom classes.


