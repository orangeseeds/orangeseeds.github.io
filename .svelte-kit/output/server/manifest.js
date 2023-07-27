export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.svg","icon.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.b7e1ede9.js","app":"_app/immutable/entry/app.ebae16ef.js","imports":["_app/immutable/entry/start.b7e1ede9.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.17dc1a0e.js","_app/immutable/chunks/paths.469520dd.js","_app/immutable/entry/app.ebae16ef.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.22014e27.js"],"stylesheets":[],"fonts":[]},
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
