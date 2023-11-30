/* empty css                                     */import { e as createAstro, f as createComponent, r as renderTemplate, i as addAttribute, g as renderHead } from '../astro_34daa064.mjs';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const profilePicture = "https://i.imgur.com/JPGFE75.jpg";
  return renderTemplate`<!-- // 📂 src/pages/index.astro --><html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body> <!-- 👀 Look here  --> <img${addAttribute(profilePicture, "src")} alt="Frau Katerina's headshot." width="100px" height="100px"> <p>Frau Katerina's headshot.</p>  </body> </html>`;
}, "C:/Users/ejrl6/dev/capres-cms/src/pages/index.astro", void 0);

const $$file = "C:/Users/ejrl6/dev/capres-cms/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
