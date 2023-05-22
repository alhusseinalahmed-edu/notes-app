import type { LayoutServerLoad } from './$types';
import { database } from '$lib/database';

export const load = (async ({cookies}) => {

    const session = cookies.get("session");
    if(!session)return;
    const user = await database.user.findUnique({where:{session}});

    return {
        user,
    };
}) satisfies LayoutServerLoad;