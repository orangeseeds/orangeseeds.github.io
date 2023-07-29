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
		client: {"start":"_app/immutable/entry/start.c09e9ffa.js","app":"_app/immutable/entry/app.860d185c.js","imports":["_app/immutable/entry/start.c09e9ffa.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.31e189b2.js","_app/immutable/chunks/paths.c5ee81d8.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.860d185c.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.22014e27.js"],"stylesheets":[],"fonts":[]},
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
