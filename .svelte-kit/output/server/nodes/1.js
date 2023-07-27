

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.03804e7b.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.bc45fae3.js","_app/immutable/chunks/singletons.ec375717.js","_app/immutable/chunks/paths.464a7052.js"];
export const stylesheets = [];
export const fonts = [];
