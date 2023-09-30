import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/tierdom' : '',
    },
    adapter: adapter({
      manifest: false,
      pages: 'docs',
      assets: 'docs',
      fallback: '404.html',
      precompress: false,
      strict: true,
    }),
  },
};

export default config;
