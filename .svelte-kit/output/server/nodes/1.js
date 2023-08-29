

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.56e07473.js","_app/immutable/chunks/scheduler.8b8ca6cf.js","_app/immutable/chunks/index.e1f33fdf.js","_app/immutable/chunks/singletons.d3b02895.js","_app/immutable/chunks/paths.9274cf46.js"];
export const stylesheets = [];
export const fonts = [];
