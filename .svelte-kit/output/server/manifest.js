export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.3938545a.js","app":"_app/immutable/entry/app.6961a6e5.js","imports":["_app/immutable/entry/start.3938545a.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.2c648f85.js","_app/immutable/chunks/paths.76d6fdf9.js","_app/immutable/entry/app.6961a6e5.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.aaba837c.js"],"stylesheets":[],"fonts":[]},
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
