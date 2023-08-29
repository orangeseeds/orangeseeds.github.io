import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.c44741c0.js","_app/immutable/chunks/scheduler.8b8ca6cf.js","_app/immutable/chunks/index.e1f33fdf.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.4a3060e2.js"];
export const stylesheets = ["_app/immutable/assets/app.be54f8c2.css"];
export const fonts = [];
