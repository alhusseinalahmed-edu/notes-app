// @ts-nocheck
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


export const actions = {
  register: async ({ request, cookies }: import('./$types').RequestEvent) => {
    const form = await request.formData();
    const result = await auth.register(form, cookies);
    console.log(result);
    if (!result.success) {
      return fail(400, {error:result.message});
    }

    throw redirect(303, "/login")
  },
};;null as any as Actions;