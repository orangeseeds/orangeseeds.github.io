
// This file is being used to setup Headers for the routes
//
//
//

// export function load({ setHeaders }) {
//     setHeaders({
//         'Content-type': 'text/plain',
//     });
// }
//

/**
 * @type {string}
 */
let data;

export function load({ url }) {
    return {
        formData: data,
        url: url.href,
    }
}

// export const actions = {
//     // default form actions
//     // default: async ({ request }) => {
//     //     const form = await request.formData();
//     //     data = form.get("name")
//     // }
//     //
//     // Named and default form actions cannot be used at the same time!!
//
//     create: async ({ request }) => {
//         const form = await request.formData();
//         data = form.get("name");
//     }
// }
