import * as server from '../entries/pages/register/_page.server.ts.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.019b7f68.js","_app/immutable/chunks/index.7a006170.js"];
export const stylesheets = [];
export const fonts = [];
