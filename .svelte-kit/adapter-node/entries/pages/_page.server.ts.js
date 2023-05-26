import { d as database } from "../../chunks/database.js";
import { r as redirect, f as fail } from "../../chunks/index.js";
const load = async ({ cookies }) => {
  const session = cookies.get("session");
  if (!session) {
    throw redirect(303, "/login");
  }
  const user = await database.user.findUnique({ where: { session } });
  const notes = await database.note.findMany({ where: { authorId: user?.id } });
  if (notes) {
    return {
      notes
    };
  }
};
const actions = {
  logout: async ({ request, cookies }) => {
    await request.formData();
    cookies.set("session", "", {
      path: "/",
      expires: /* @__PURE__ */ new Date(0)
      // Set the expiration date to a past date
    });
    throw redirect(303, "/login");
  },
  add: async ({ request, cookies }) => {
    const form = await request.formData();
    const session = cookies.get("session");
    const content = form.get("content")?.toString();
    const title = form.get("title")?.toString();
    if (!session) {
      return fail(400, { error: "Session expired!" });
    }
    if (!title) {
      return fail(400, { error: "Title missing!" });
    }
    if (!content) {
      return fail(400, { error: "Note text missing!" });
    }
    const add = await database.user.update({ where: { session }, data: { notes: { create: { title, content } } } });
    if (!add) {
      return fail(400, { error: "failed to add the note!" });
    }
  },
  delete: async ({ request, cookies }) => {
    const form = await request.formData();
    const noteString = form.get("noteId")?.toString();
    if (!noteString)
      return;
    const note_Id = parseInt(noteString);
    if (!note_Id) {
      return fail(400, { error: "Couldn't find the note!" });
    }
    const result = await database.note.delete({ where: { id: note_Id } });
    if (!result) {
      return fail(400, { error: "Couldn't delete the note!" });
    }
  }
};
export {
  actions,
  load
};
