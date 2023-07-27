import * as server from '../entries/pages/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/3.dc3a9b96.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.1c70bbaf.js"];
export const stylesheets = [];
export const fonts = [];
