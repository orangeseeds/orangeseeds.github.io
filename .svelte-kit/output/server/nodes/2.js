import * as server from '../entries/pages/posts/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/posts/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.92b6cd4b.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.b170b7b1.js","_app/immutable/chunks/paths.112125d6.js"];
export const stylesheets = [];
export const fonts = [];
