

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.746366c8.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.b170b7b1.js","_app/immutable/chunks/singletons.6abe7313.js","_app/immutable/chunks/paths.112125d6.js"];
export const stylesheets = [];
export const fonts = [];
