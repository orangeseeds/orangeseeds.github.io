

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.4f48244c.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.be17cdd0.js"];
export const stylesheets = [];
export const fonts = [];
