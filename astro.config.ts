import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ahmedhesham.dev',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        'rose-pine-dawn': 'rose-pine-dawn',
        'github-dark': 'github-dark',
        'tokyo-night': 'tokyo-night',
        'vitesse-dark': 'vitesse-dark',
        dracula: 'dracula',
        'min-light': 'min-light',
        'one-dark-pro': 'one-dark-pro',
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
