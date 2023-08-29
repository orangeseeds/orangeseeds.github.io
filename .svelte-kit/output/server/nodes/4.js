import * as server from '../entries/pages/tags/_layout.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/tags/+layout.server.js";
export const imports = ["_app/immutable/nodes/4.8d697f6f.js","_app/immutable/chunks/scheduler.8b8ca6cf.js","_app/immutable/chunks/index.e1f33fdf.js"];
export const stylesheets = [];
export const fonts = [];
