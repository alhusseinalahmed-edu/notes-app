import type { LayoutServerLoad } from './$types';
import { database } from '$lib/database';
import type { Cookies } from '@sveltejs/kit';

export const load = (async ({cookies}) => {

    const session = cookies.get("session");
    let loggedIn = false;
    console.log(session);
    if(!session)return;
    const user = await database.user.findUnique({where:{session}});
    if(user)loggedIn = true;
    return {
        user,
        loggedIn,
    };
}) satisfies LayoutServerLoad;