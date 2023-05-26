import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.f37ba125.js","_app/immutable/chunks/index.7a006170.js"];
export const stylesheets = ["_app/immutable/assets/0.e95d4287.css"];
export const fonts = [];
