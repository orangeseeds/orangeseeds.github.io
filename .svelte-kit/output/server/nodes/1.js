

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.04bd548d.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.e68ba0ea.js","_app/immutable/chunks/singletons.f9423aba.js","_app/immutable/chunks/paths.e6adc59f.js"];
export const stylesheets = [];
export const fonts = [];
