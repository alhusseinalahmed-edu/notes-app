// @ts-nocheck
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
    const user = await database.user.findUnique({where:{session}})
    const notes = await database.note.findMany({where:{authorId: user?.id}})

    if(notes)
    {
      return {
        notes,
      }
    }

}) satisfies PageServerLoad;


export const actions = {
    logout: async ({ request, cookies }: import('./$types').RequestEvent) => {
      const form = await request.formData();
      cookies.set('session', '', {
        path: '/',
        expires: new Date(0) // Set the expiration date to a past date
      });
      
      throw redirect(303, "/login")
    },
    add: async ({ request, cookies }: import('./$types').RequestEvent) => {
      const form = await request.formData();
      const session = cookies.get("session");
      const content = form.get("content")?.toString();
      const title = form.get("title")?.toString();

      if(!session)
      {
        return fail(400, {error: "Session expired!"})
      }      
      if(!title)
      {
        return fail(400, {error: "Title missing!"})
      }      
      if(!content)
      {
        return fail(400, {error: "Note text missing!"})
      }      


      const add = await database.user.update({where:{session}, data:{notes: {create:{title, content}}}});

      if(!add)
      {
        return fail(400, {error: "failed to add the note!"})
      }

      


    }
  };

;null as any as Actions;