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
		client: {"start":"_app/immutable/entry/start.81bb381b.js","app":"_app/immutable/entry/app.886529f1.js","imports":["_app/immutable/entry/start.81bb381b.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.6abe7313.js","_app/immutable/chunks/paths.112125d6.js","_app/immutable/entry/app.886529f1.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.b170b7b1.js"],"stylesheets":[],"fonts":[]},
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
