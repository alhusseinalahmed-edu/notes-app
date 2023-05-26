import { a as auth } from './authentication-ce338a3c.js';
import { r as redirect, f as fail } from './index-39e97e00.js';
import { d as database } from './database-e8a7ce96.js';
import 'crypto';
import '@prisma/client';

const load = async ({ cookies }) => {
  const session = cookies.get("session");
  if (!session)
    return;
  const user = await database.user.findUnique({ where: { session } });
  if (user) {
    throw redirect(303, "/");
  }
  return {};
};
const actions = {
  register: async ({ request, cookies }) => {
    const form = await request.formData();
    const result = await auth.register(form, cookies);
    console.log(result);
    if (!result.success) {
      return fail(400, { error: result.message });
    }
    throw redirect(303, "/login");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 4;
const component = async () => (await import('./_page.svelte-3f211c0b.js')).default;
const server_id = "src/routes/register/+page.server.ts";
const imports = ["_app/immutable/nodes/4.019b7f68.js","_app/immutable/chunks/index.7a006170.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-40ee77a7.js.map
