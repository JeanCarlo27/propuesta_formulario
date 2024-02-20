import { json } from "body-parser";
import { useEffect, useState } from "react";

export const contrler = () => {
    const get = (url) => {}
    const put = () => { }
    return {
        get,
        put
    }


}

export const post = (url, Data) => {
    if (!url && !Data) {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(Data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((Response) => {
                if (Response.ok) {
                    return Response.json()
                } else {
                    throw new Error('No se puede realizar la inserción')
                }
            }).then((Data) => {
                console.log(Data)
            }).catch((Error) => {
                console.log(Error)
            })
    }
}