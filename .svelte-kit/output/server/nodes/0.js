import * as universal from '../entries/pages/_layout.js';
import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.3b4fcf8e.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.1c70bbaf.js"];
export const stylesheets = ["_app/immutable/assets/app.518bb621.css"];
export const fonts = [];
