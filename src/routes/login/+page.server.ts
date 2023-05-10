import type { PageServerLoad } from './$types';
import type { Actions } from "./$types";
import { redirect } from "@sveltejs/kit";
import {database} from "$lib/database"
import * as crypto from "crypto";

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


export const actions: Actions = {
    login: async ({ request, cookies }) => {
    },

};