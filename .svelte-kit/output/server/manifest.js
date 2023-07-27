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
		client: {"start":"_app/immutable/entry/start.d167fc01.js","app":"_app/immutable/entry/app.b304bff1.js","imports":["_app/immutable/entry/start.d167fc01.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.ec375717.js","_app/immutable/chunks/paths.464a7052.js","_app/immutable/entry/app.b304bff1.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.bc45fae3.js"],"stylesheets":[],"fonts":[]},
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
