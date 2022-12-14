# Tailmars

Thank you very much for purchasing Tailmars. We've enjoyed working on this product and we hope it saves you some development time and helps you create nice websites.
If you do, please, send us the link at [@weblime_agency](https://twitter.com/@weblime_agency)! We would love to see it 😁

## Demo

You can see the latest version of the project at [tailmars.com](tailmars.com).

## Features

- HTML with minimal JavaScript
- Built with TailwindCSS JIT
- Fully responsive

## How to use this template

You have two options, using this project as the starter template and build your website from here, or take some components and put them inside your own project.

### Using this project

You'll need Node.js, if you don't have installed, you can get it from [here](https://nodejs.org/en/).

Open a terminal into the project folder and install the dependencies.

```bash
  npm install
```

These are the scripts of the project:

```bash
  "scripts": {
    "dev": "NODE_ENV=development postcss ./src/tailwind.css -o ./public/tailwind.css -w --verbose",
    "build": "NODE_ENV=production postcss ./src/tailwind.css -o ./public/tailwind.css"
  },
```

With this script:

```bash
  npm run dev
```

We'll start the project on development mode, this will get the dev server going (Vite) as well as open the JIT compiler watcher and add any necessary Tailwind classes to your production output file.

And with:

```bash
  npm run build
```

We'll do a one time build, this is used when you want to push to production.

The primary/secondary and complementary colors are customizable, you only need go to the `tailwind.config.js` file and modify them there.

Let's imagine we want to use blue as our primary color, green as secondary and indigo as complementary. We just need to go to the tailwind config and modify it there.

```
colors: {
  primary: colors.blue,
  secondary: colors.green,
  complementary: colors.indigo,
},
```

### Import components into your project

You can also install Tailwind into your project, copy the `tailwind.config.js` file, copy the scripts from package.json, and then get to building!
#   C o n t a c t  
 #   C o n t a c t  
 #   C o n t a c t  
 