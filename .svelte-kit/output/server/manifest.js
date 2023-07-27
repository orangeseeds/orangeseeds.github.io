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
		client: {"start":"_app/immutable/entry/start.fbe3d3f5.js","app":"_app/immutable/entry/app.0bc3938a.js","imports":["_app/immutable/entry/start.fbe3d3f5.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.58dd6980.js","_app/immutable/chunks/paths.911bcca6.js","_app/immutable/entry/app.0bc3938a.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.1c70bbaf.js"],"stylesheets":[],"fonts":[]},
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
