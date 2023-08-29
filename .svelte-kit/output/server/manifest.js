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
		client: {"start":"_app/immutable/entry/start.c1dba92b.js","app":"_app/immutable/entry/app.36d368f1.js","imports":["_app/immutable/entry/start.c1dba92b.js","_app/immutable/chunks/scheduler.8a796165.js","_app/immutable/chunks/singletons.424dcfd2.js","_app/immutable/chunks/index.8e806f53.js","_app/immutable/chunks/paths.e29f2e23.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.36d368f1.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/scheduler.8a796165.js","_app/immutable/chunks/index.e4ad3c2b.js"],"stylesheets":[],"fonts":[]},
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
