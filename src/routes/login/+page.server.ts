import type { PageServerLoad } from './$types';
import { auth } from '$lib/authentication';
import type { Actions } from "./$types";
import { fail } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { database } from '$lib/database';


export const load = (async ({cookies}) => {

    const session = cookies.get("session");
    if(!session)return;
    const user = await database.user.findUnique({where:{session}});

    if(user)
    {
      throw redirect(303, "/")
    }

    return {};
}) satisfies PageServerLoad;


export const actions: Actions = {
    login: async ({ request, cookies }) => {
      const form = await request.formData();
  
      const result = await auth.login(form, cookies);
      
      // If it fails
      if (!result.success) {
        return fail(400, {error:result.message});
      }
      if(result.session)
      {
        cookies.set("session", result.session, {
            path: "/",
            httpOnly: true, // optional for now
            sameSite: "strict", // optional for now
            secure: process.env.NODE_ENV === "production", // optional for now
            maxAge: 60 * 60, //
          });
        throw redirect(302, "/");
      }  
    },
  };