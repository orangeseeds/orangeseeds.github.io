

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5bad8497.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.22014e27.js","_app/immutable/chunks/singletons.17dc1a0e.js","_app/immutable/chunks/paths.469520dd.js"];
export const stylesheets = [];
export const fonts = [];
