// @ts-nocheck
import type { PageServerLoad } from './$types';
import { auth } from '$lib/authentication';
import type { Actions } from "./$types";
import { fail } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';


export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


export const actions = {
    login: async ({ request, cookies }: import('./$types').RequestEvent) => {
      const form = await request.formData();
  
      const result = await auth.login(form, cookies);
      
      // If it fails
      if (!result.success) {
        return fail(400, {message:result.message});
      }
      if(result.session)
      {
        cookies.set("session", result.session, {
            path: "/",
            httpOnly: true, // optional for now
            sameSite: "strict", // optional for now
            secure: process.env.NODE_ENV === "production", // optional for now
            maxAge: 60, //
          });
        throw redirect(302, "/");
      }  
    },
  };;null as any as Actions;