import {json} from "@sveltejs/kit";

export const GET = async () => {
    return json({
        status: true,
        message: "Alive and kicking!"
    }, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    })
}