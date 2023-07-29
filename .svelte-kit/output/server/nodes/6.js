

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.9a858125.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.22014e27.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.c5ee81d8.js"];
export const stylesheets = [];
export const fonts = [];
