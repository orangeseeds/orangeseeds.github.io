import * as server from '../entries/pages/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/4.8824422d.js","_app/immutable/chunks/scheduler.8a796165.js","_app/immutable/chunks/index.e4ad3c2b.js"];
export const stylesheets = [];
export const fonts = [];
