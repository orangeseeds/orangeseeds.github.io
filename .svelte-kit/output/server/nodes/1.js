

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7e578e1c.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.be17cdd0.js","_app/immutable/chunks/singletons.3d639ffb.js","_app/immutable/chunks/paths.60f946ac.js"];
export const stylesheets = [];
export const fonts = [];
