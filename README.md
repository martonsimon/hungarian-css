# Your Journey With Hungarian CSS Has Begun 🎨

Welcome to Hungarian CSS, the world’s first (and possibly only) CSS preprocessor that lets you write styles in flawless Hungarian! 🚀 Ever wanted to style your website using "hatter-szin" instead of "background-color"? Well, now you can!

This project is a fun and experimental take on CSS preprocessors, proving that even styling your website can have a touch of linguistic flair. Whether you're a Hungarian speaker, a language enthusiast, or just someone who enjoys chaotic yet amusing coding experiences, this preprocessor is here to redefine how you write stylesheets.

✨ Features
- ✅ Write CSS in Hungarian – No more "color," it’s "szín" now!
- ✅ Seamless Integration – Works like any other PostCSS plugin in your Vite project.
- ✅ Vite + TypeScript Support – Because why not go all in?
- ✅ 100% Unnecessary, 100% Fun – This won’t change the world, but it’ll make you laugh.

🚀 How It Works

Just install the package, add it to your PostCSS config, and start writing styles in magyar CSS! The preprocessor will automatically translate Hungarian property names into standard CSS before compilation.

This project is for fun, learning, and sheer absurdity, so if you're into weirdly niche development ideas, hop on board! 🚢

"Mert a CSS szebb magyarul!" 🇭🇺💙
# Install
>npm i hungarian-css
# Vite Config

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import hungarianCss from 'hungarian-css' // import

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        hungarianCss() // add
      ]
    }
  }
})
```

# Examples
## Button
```html
<button>Gomb</button>
```
```css
button {
  háttér-szín: #ccc;
  belső-margó: 15képpont 26képpont;
  szegély: nincs;
  szegély-sugár: 4képpont;
  betű-méret: 16képpont;
  betű-súly: 600;
  kurzor-mutató: mutató;
  átmenet: háttér-szín-átmenet 0.3s;
}
button:hover{
  háttér-szín: #ddd;
}
```

## Grid
```html
<div className="rács-tároló">
    <div className="rács-elem">1</div>
    <div className="rács-elem">2</div>
    <div className="rács-elem">3</div>
    <div className="rács-elem">4</div>
</div>
```
```css
.rács-tároló {
  kijelzés: rács;
  rács-sablon-oszlopok: repeat(3, 1fr);
  tér: 20képpont;
}

.rács-elem {
  háttér-szín: #ccc;
  belső-margó: 20képpont;
  szöveg-igazítás: középre;
  szegély-sugár: 4képpont;
  átmenet: háttér-szín-átmenet 0.3s;
}
.rács-elem:hover {
  háttér-szín: #ddd;
}
```