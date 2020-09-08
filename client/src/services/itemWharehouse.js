export default {
    postItem: (itemName, quantity, link, heroImg, mainImg) => {
        return fetch('/item/newItem', {
            method: "post",
            body: JSON.stringify({ "itemName": itemName, "quantity": quantity, "link": link, "heroImg": heroImg, "mainImg": mainImg}),
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
    getItems: () => {
        return fetch('/item/getItem')
            .then(response => {
                if (response.status !== 401) {
                    return response.json().then(data => data);
                }
                else
                    return { message: { msgBody: "Unauthorized", msgError: true } };
            });
    },
}