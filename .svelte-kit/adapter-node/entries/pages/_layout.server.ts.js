import { d as database } from "../../chunks/database.js";
const load = async ({ cookies }) => {
  const session = cookies.get("session");
  if (!session)
    return;
  const user = await database.user.findUnique({ where: { session } });
  return {
    user
  };
};
export {
  load
};
