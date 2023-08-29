

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_slug_/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.dfd78cb1.js","_app/immutable/chunks/scheduler.8b8ca6cf.js","_app/immutable/chunks/index.e1f33fdf.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.9274cf46.js"];
export const stylesheets = [];
export const fonts = [];
