export default {
    postItem: (item) => {
        return fetch('/item/newItem', {
            method: "post",
            body: JSON.stringify({ "link": item }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status !== 401) {
                return response.json().then(data => data);
            }
            else
                return { message: { msgBody: "Unauthorized" }, msgError: true };
        });
    },
    // getUserPosts: () => {
    //     return fetch('/user/posts')
    //         .then(response => {
    //             if (response.status !== 401) {
    //                 return response.json().then(data => data);
    //             }
    //             else
    //                 return { message: { msgBody: "Unauthorized", msgError: true } };
    //         });
    // },

}