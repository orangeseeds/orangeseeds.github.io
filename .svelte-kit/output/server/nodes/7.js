

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.2d380db8.js","_app/immutable/chunks/scheduler.8b8ca6cf.js","_app/immutable/chunks/index.e1f33fdf.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.9274cf46.js"];
export const stylesheets = [];
export const fonts = [];
