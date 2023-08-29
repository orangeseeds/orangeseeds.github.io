

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_slug_/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.120a09be.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.e68ba0ea.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.e6adc59f.js"];
export const stylesheets = [];
export const fonts = [];
