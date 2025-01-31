import {redirect} from "@sveltejs/kit";

export const load = () => {
    redirect(302, `https://app.theneo.io/digitaldrreamer/aayah-info/aayah-api`)
}