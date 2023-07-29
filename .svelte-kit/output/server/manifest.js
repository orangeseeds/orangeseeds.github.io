export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","blue_sphere_matcap.png","favicon.svg","icon.png","low_poly_earth.glb"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".glb":"model/gltf-binary"},
	_: {
		client: {"start":"_app/immutable/entry/start.b8561dd9.js","app":"_app/immutable/entry/app.39e00f67.js","imports":["_app/immutable/entry/start.b8561dd9.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/singletons.3d639ffb.js","_app/immutable/chunks/paths.60f946ac.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.39e00f67.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.be17cdd0.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
