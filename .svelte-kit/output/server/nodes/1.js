

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.74a7585f.js","_app/immutable/chunks/scheduler.8b8ca6cf.js","_app/immutable/chunks/index.e1f33fdf.js","_app/immutable/chunks/singletons.0e7f7264.js","_app/immutable/chunks/paths.4a3060e2.js"];
export const stylesheets = [];
export const fonts = [];
