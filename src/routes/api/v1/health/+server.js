import {json} from "@sveltejs/kit";

export const GET = async () => {
    return json({
        status: true,
        message: "Alive and kicking!"
    })
}