import * as server from '../entries/pages/posts/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/posts/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.b56b099b.js","_app/immutable/chunks/scheduler.8a796165.js","_app/immutable/chunks/index.e4ad3c2b.js"];
export const stylesheets = [];
export const fonts = [];
