import {database} from "$lib/database"
import type { Cookies } from "@sveltejs/kit";
import crypto from "crypto"

export type Result = {
    success:boolean;
    message:string;
    session?:string;
}

export interface Auth{

    login(form:FormData, cookies:Cookies) : Promise<Result>
    register(form:FormData, cookies:Cookies) : Promise<Result>

}

export class AuthHandler implements Auth{
    async register(form: FormData, cookies:Cookies): Promise<Result> {

        const username = form.get("username")?.toString();
        const password = form.get("password")?.toString();
    
        if (username && password) {
          let users = await database.user.findUnique({ where: { username } });
            
          if(password.length < 5)
          {
            return {success:false, message:"Password is too weak!"}
          }
          if (!users) {
            const session = crypto.randomUUID();
    
            // Creating a unique salt for a particular user
            const salt = crypto.randomBytes(16).toString('hex'); 
            // Should be saved in the database along with the hash
    
            // Hash the salt and password with 1000 iterations, 64 length and sha512 digest 
            const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    
    
            const user = await database.user.create({
              data: { username, hash, salt, session },
            });
    
            return {success:true, message:"Created a new user!"}
          }
          else if(users)
          {
            return {success:false, message:"User already exists!"}
          }
        }

        return {success:false, message:"Account creation failed!"}
    }

    async login(form: FormData, cookies:Cookies): Promise<Result> {
        const username = form.get("username")?.toString();
        const password = form.get("password")?.toString();
        if(!password || !username)
        {
            return {success:false, message:"Couldn't find the username!"}
        }
        try {
          const result = await database.user.findFirst({
            where: { username },
          });
        
          if (!result) {
            return {success:false, message:"Couldn't find the username!"}
          }
    
          const { salt, hash } = result;
    
          const newhash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
    
          if (newhash != hash) {
            return {success:false, message:"Wrong password!"}
          }
    
          const session = crypto.randomUUID();
          
          const update = await database.user.update({
            where: { id: result.id },
            data: {
              session,
            },
          });
    
        if(update)  return {success:true, message:"Logged in!", session: update.session}

        } catch (e){
            return {success:false, message:"Couldn't log in!"}
        }
        return {success:false, message:"Couldn't log in!"}
    }
}

export const auth:AuthHandler = new AuthHandler();