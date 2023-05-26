const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.134740a8.js","app":"_app/immutable/entry/app.b23a961e.js","imports":["_app/immutable/entry/start.134740a8.js","_app/immutable/chunks/index.7a006170.js","_app/immutable/chunks/singletons.498a5a7a.js","_app/immutable/entry/app.b23a961e.js","_app/immutable/chunks/index.7a006170.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-419f28d9.js'),
			() => import('./chunks/1-e9079a82.js'),
			() => import('./chunks/2-2421e653.js'),
			() => import('./chunks/3-d9bbe999.js'),
			() => import('./chunks/4-40ee77a7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
