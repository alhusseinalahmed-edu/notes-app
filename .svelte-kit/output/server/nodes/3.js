import * as server from '../entries/pages/login/_page.server.ts.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.9c874e6f.js","_app/immutable/chunks/index.7a006170.js"];
export const stylesheets = [];
export const fonts = [];
