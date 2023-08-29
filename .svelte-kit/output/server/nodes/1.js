

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4e0ce2f5.js","_app/immutable/chunks/scheduler.8a796165.js","_app/immutable/chunks/index.e4ad3c2b.js","_app/immutable/chunks/singletons.424dcfd2.js","_app/immutable/chunks/index.8e806f53.js","_app/immutable/chunks/paths.e29f2e23.js"];
export const stylesheets = [];
export const fonts = [];
