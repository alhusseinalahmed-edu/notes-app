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
  login: async ({ request, cookies }) => {
    const form = await request.formData();
    const result = await auth.login(form, cookies);
    if (!result.success) {
      return fail(400, { error: result.message });
    }
    if (result.session) {
      cookies.set("session", result.session, {
        path: "/",
        httpOnly: true,
        // optional for now
        sameSite: "strict",
        // optional for now
        secure: process.env.NODE_ENV === "production",
        // optional for now
        maxAge: 60 * 60
        //
      });
      throw redirect(302, "/");
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 3;
const component = async () => (await import('./_page.svelte-0bde14b3.js')).default;
const server_id = "src/routes/login/+page.server.ts";
const imports = ["_app/immutable/nodes/3.9c874e6f.js","_app/immutable/chunks/index.7a006170.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-d9bbe999.js.map
