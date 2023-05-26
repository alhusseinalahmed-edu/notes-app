import { a as auth } from "../../../chunks/authentication.js";
import { r as redirect, f as fail } from "../../../chunks/index.js";
import { d as database } from "../../../chunks/database.js";
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
export {
  actions,
  load
};
