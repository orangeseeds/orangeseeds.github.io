

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.16fa073e.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.be17cdd0.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.60f946ac.js"];
export const stylesheets = [];
export const fonts = [];
