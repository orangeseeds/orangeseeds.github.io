import * as server from '../entries/pages/blog/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.1d9b8daa.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.aaba837c.js","_app/immutable/chunks/paths.76d6fdf9.js"];
export const stylesheets = [];
export const fonts = [];
