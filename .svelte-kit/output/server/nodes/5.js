

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.3de9a444.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.aaba837c.js","_app/immutable/chunks/paths.76d6fdf9.js"];
export const stylesheets = [];
export const fonts = [];
