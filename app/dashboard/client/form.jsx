'use client'

import AjoutClient from "./ajoutClient";
import ModifieClient from "./modifieClient";


export default function Form () {

    const flag = true;

    return (
        <div className="container mx-auto py-5">
            {flag ? <AjoutClient /> : <ModifieClient />}
        </div>
    )
}

    