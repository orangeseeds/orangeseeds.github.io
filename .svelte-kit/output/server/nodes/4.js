

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.90c3245a.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.1c70bbaf.js"];
export const stylesheets = [];
export const fonts = [];
