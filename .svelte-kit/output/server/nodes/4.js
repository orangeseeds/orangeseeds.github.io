

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.97fefe70.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.b170b7b1.js"];
export const stylesheets = [];
export const fonts = [];
