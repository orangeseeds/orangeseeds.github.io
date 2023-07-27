import * as server from '../entries/pages/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/3.ad51e3ed.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.aaba837c.js","_app/immutable/chunks/paths.76d6fdf9.js"];
export const stylesheets = [];
export const fonts = [];
