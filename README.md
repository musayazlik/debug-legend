# Debug Legend

A retro pixel-art platformer that turns debugging into an epic. Ela pushed to production, the bug monsters kidnapped her, and it is up to you to grab the debugger, squash bugs, collect power-ups, and fight your way down into the data center to rescue her.

**Play it live:** https://debug-destani.vercel.app

## Features

- Canvas-based pixel-art platformer with multiple worlds and boss fights such as the Spaghetti Code Monster and the Legacy Code Monster
- Keyboard and touch controls, including long-press for a higher jump
- Procedural chiptune music and sound effects generated with the Web Audio API
- Five-language interface: Turkish, English, German, Arabic, and Chinese
- Power-ups and surprises like sudo mode, rubber duck debugging, coffee rain, and invisible blocks
- A playable portfolio: enter your name, track your score and bugs squashed, then get in touch

## Controls

| Action | Keyboard | Touch |
| --- | --- | --- |
| Move | Arrow keys / A, D | On-screen arrows |
| Jump | Space / W / Up | JUMP button (hold for a higher jump) |
| Fire | X / K | FIRE button (unlocked with the debugger) |
| Pause | P / Esc | Pause button |

## Tech stack

- Vanilla HTML, CSS, and JavaScript — no frameworks and no build step
- HTML5 Canvas 2D for rendering
- Web Audio API for the soundtrack and effects
- Deployed on [Vercel](https://vercel.com)

## Project structure

```text
index.html   Page shell, HUD, menus, and touch controls
style.css    Pixel-art UI and responsive layout
script.js    Game engine, levels, audio, and rendering
i18n.js      Translations for tr, en, de, ar, and zh
```

## Run locally

Clone the repository and open `index.html` in a browser, or serve the folder with any static server:

```bash
npx serve .
```

## Deploy

The project is deployed as a static site on Vercel:

```bash
npx vercel deploy --prod
```

## Author

Built by **Musa Yazlık**

- Website: [musayazlik.com](https://musayazlik.com)
- GitHub: [@musayazlik](https://github.com/musayazlik)
- LinkedIn: [musayazlik](https://www.linkedin.com/in/musayazlik/)
- X: [@musayazlik](https://x.com/musayazlik)
