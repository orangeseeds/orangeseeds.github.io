

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.425044f2.js","_app/immutable/chunks/scheduler.8b8ca6cf.js","_app/immutable/chunks/index.e1f33fdf.js"];
export const stylesheets = [];
export const fonts = [];
