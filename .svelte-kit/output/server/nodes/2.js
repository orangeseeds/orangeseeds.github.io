import * as server from '../entries/pages/posts/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/posts/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.aed48025.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.e68ba0ea.js"];
export const stylesheets = [];
export const fonts = [];
