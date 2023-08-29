import * as server from '../entries/pages/posts/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/posts/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.229edbd4.js","_app/immutable/chunks/scheduler.8b8ca6cf.js","_app/immutable/chunks/index.e1f33fdf.js"];
export const stylesheets = [];
export const fonts = [];
