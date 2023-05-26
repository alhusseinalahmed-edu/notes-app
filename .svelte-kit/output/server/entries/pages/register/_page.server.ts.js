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
export {
  actions,
  load
};
