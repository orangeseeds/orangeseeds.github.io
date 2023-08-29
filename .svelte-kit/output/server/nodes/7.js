import * as universal from '../entries/pages/posts/_slug_/_page.ts.js';
import * as server from '../entries/pages/posts/_slug_/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/posts/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/posts/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.f7616cbe.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.e68ba0ea.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/singletons.f9423aba.js","_app/immutable/chunks/paths.e6adc59f.js"];
export const stylesheets = ["_app/immutable/assets/app.5a52efd2.css"];
export const fonts = [];
