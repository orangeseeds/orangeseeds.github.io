import * as universal from '../entries/pages/_layout.js';
import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.ef210a9a.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.b170b7b1.js"];
export const stylesheets = [];
export const fonts = [];
