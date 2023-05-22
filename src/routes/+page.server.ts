import type {PageServerLoad } from './$types';
import { database } from '$lib/database';
import { redirect } from '@sveltejs/kit';
import type { Actions } from "./$types";
import { fail } from '@sveltejs/kit';


export const load = (async ({cookies}) => {

    const session = cookies.get("session");

    if(!session){
        throw redirect(303, "/login");
    }
}) satisfies PageServerLoad;


export const actions: Actions = {
    logout: async ({ request, cookies }) => {
      const form = await request.formData();
      cookies.set('session', '', {
        path: '/',
        expires: new Date(0) // Set the expiration date to a past date
      });
      
      throw redirect(303, "/login")
    },
  };

