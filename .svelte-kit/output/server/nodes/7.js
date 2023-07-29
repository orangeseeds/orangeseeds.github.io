import * as universal from '../entries/pages/posts/_slug_/_page.ts.js';
import * as server from '../entries/pages/posts/_slug_/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/posts/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/posts/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.c453bfff.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.22014e27.js"];
export const stylesheets = ["_app/immutable/assets/app.d3132519.css"];
export const fonts = [];
