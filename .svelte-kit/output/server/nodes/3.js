

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_slug_/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.8959e191.js","_app/immutable/chunks/scheduler.8a796165.js","_app/immutable/chunks/index.e4ad3c2b.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.e29f2e23.js"];
export const stylesheets = [];
export const fonts = [];
