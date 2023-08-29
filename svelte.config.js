import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex, escapeSvelte } from 'mdsvex';
import shiki from 'shiki'


/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
    extensions: ['.md', '.svelte'],
    highlight: {
        highlighter: async (code, lang = 'text') => {
            const highlighter = await shiki.getHighlighter({ theme: 'github-dark-dimmed' })
            const html = escapeSvelte(highlighter.codeToHtml(code, { lang }))
            return `{@html \`${html}\` }`
        }
    },
    // layout: {
    //     article: "./src/lib/components/Article.svelte",
    //     _: "./src/lib/components/Article.svelte"
    // }
}
/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.md', '.svx'],
    preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
    kit: {
        adapter: adapter(),
        paths: {
            // base: "/blog",
            base: "",
        },
    },
};

export default config;
