import { d as database } from './database-e8a7ce96.js';
import * as crypto from 'crypto';

class AuthHandler {
  async register(form, cookies) {
    const username = form.get("username")?.toString();
    const password = form.get("password")?.toString();
    if (username && password) {
      let users = await database.user.findUnique({ where: { username } });
      if (password.length < 5) {
        return { success: false, message: "Password is too weak!" };
      }
      if (!users) {
        const session = crypto.randomUUID();
        const salt = crypto.randomBytes(16).toString("hex");
        const hash = crypto.pbkdf2Sync(password, salt, 1e3, 64, "sha512").toString("hex");
        await database.user.create({
          data: { username, hash, salt, session }
        });
        return { success: true, message: "Created a new user!" };
      } else if (users) {
        return { success: false, message: "User already exists!" };
      }
    }
    return { success: false, message: "Account creation failed!" };
  }
  async login(form, cookies) {
    const username = form.get("username")?.toString();
    const password = form.get("password")?.toString();
    if (!username) {
      return { success: false, message: "Error getting the username!" };
    }
    if (!password) {
      return { success: false, message: "Error getting the password!" };
    }
    try {
      const result = await database.user.findUnique({
        where: { username }
      });
      if (!result) {
        return { success: false, message: "Couldn't find the username!" };
      }
      const { salt, hash } = result;
      const newhash = crypto.pbkdf2Sync(password, salt, 1e3, 64, "sha512").toString("hex");
      if (newhash != hash) {
        return { success: false, message: "Wrong password!" };
      }
      const session = crypto.randomUUID();
      const update = await database.user.update({
        where: { id: result.id },
        data: {
          session
        }
      });
      if (update)
        return { success: true, message: "Logged in!", session: update.session };
    } catch (e) {
      return { success: false, message: "Couldn't log in!" };
    }
    return { success: false, message: "Couldn't log in!" };
  }
}
const auth = new AuthHandler();

export { auth as a };
//# sourceMappingURL=authentication-ce338a3c.js.map
