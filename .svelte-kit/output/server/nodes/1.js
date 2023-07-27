

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.86e6ac57.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.1c70bbaf.js","_app/immutable/chunks/singletons.58dd6980.js","_app/immutable/chunks/paths.911bcca6.js"];
export const stylesheets = [];
export const fonts = [];
