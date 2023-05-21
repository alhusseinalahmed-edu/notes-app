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

  register: async ({ request, cookies }: import('./$types').RequestEvent) => {
    const form = await request.formData();
    const result = await auth.register(form, cookies);

    const response: String = result.message;

    if (result) {
      return {
        message: response,
      }
    }
  },
};;null as any as Actions;