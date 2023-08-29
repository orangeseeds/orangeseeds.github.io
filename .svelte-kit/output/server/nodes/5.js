import * as server from '../entries/pages/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/5.f3f1c529.js","_app/immutable/chunks/scheduler.8b8ca6cf.js","_app/immutable/chunks/index.e1f33fdf.js"];
export const stylesheets = [];
export const fonts = [];
