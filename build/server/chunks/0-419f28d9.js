import { d as database } from './database-e8a7ce96.js';
import '@prisma/client';

const load = async ({ cookies }) => {
  const session = cookies.get("session");
  if (!session)
    return;
  const user = await database.user.findUnique({ where: { session } });
  return {
    user
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
const component = async () => (await import('./_layout.svelte-a79f18de.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.f37ba125.js","_app/immutable/chunks/index.7a006170.js"];
const stylesheets = ["_app/immutable/assets/0.e95d4287.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-419f28d9.js.map
