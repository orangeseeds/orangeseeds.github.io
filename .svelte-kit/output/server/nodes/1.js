

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.28fb0480.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.22014e27.js","_app/immutable/chunks/singletons.a4f4ebcf.js","_app/immutable/chunks/paths.e4555a87.js"];
export const stylesheets = [];
export const fonts = [];
