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
		client: {"start":"_app/immutable/entry/start.bb473fad.js","app":"_app/immutable/entry/app.11928f5f.js","imports":["_app/immutable/entry/start.bb473fad.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/singletons.f9423aba.js","_app/immutable/chunks/paths.e6adc59f.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.11928f5f.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.e68ba0ea.js"],"stylesheets":[],"fonts":[]},
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
