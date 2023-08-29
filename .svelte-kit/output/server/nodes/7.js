import * as universal from '../entries/pages/posts/_slug_/_page.ts.js';
import * as server from '../entries/pages/posts/_slug_/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/posts/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/posts/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.a6354e50.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.8a796165.js","_app/immutable/chunks/index.e4ad3c2b.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.8e806f53.js"];
export const stylesheets = ["_app/immutable/assets/app.759f252f.css"];
export const fonts = [];
