

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a46ec4c2.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.aaba837c.js","_app/immutable/chunks/singletons.2c648f85.js","_app/immutable/chunks/paths.76d6fdf9.js"];
export const stylesheets = [];
export const fonts = [];
