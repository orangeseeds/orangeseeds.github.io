

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.66e9817b.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.e68ba0ea.js"];
export const stylesheets = [];
export const fonts = [];
