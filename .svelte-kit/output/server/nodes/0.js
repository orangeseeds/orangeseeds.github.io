import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.0a0895bf.js","_app/immutable/chunks/scheduler.8a796165.js","_app/immutable/chunks/index.e4ad3c2b.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/app.759f252f.css"];
export const fonts = [];
