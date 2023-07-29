import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.f4a0c3fb.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.be17cdd0.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/app.2749a5de.css"];
export const fonts = [];
