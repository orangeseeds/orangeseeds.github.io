import * as server from '../entries/pages/posts/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/posts/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.037b9c95.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.bc45fae3.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.464a7052.js"];
export const stylesheets = [];
export const fonts = [];
