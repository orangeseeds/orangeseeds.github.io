import * as server from '../entries/pages/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/4.cf0e00d2.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.e68ba0ea.js"];
export const stylesheets = [];
export const fonts = [];
