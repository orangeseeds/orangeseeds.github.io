

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_slug_/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.672dff1b.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.22014e27.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.e4555a87.js"];
export const stylesheets = [];
export const fonts = [];
