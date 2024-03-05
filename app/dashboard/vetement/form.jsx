'use client'

import AjoutVetement from "./ajoutVetement";
import ModifieVetement from "./modifieVetement";

export default function Form () {

    const flag = true;

    return (
        <div className="container mx-auto py-5">
            {flag ? <AjoutVetement /> : <ModifieVetement />}
        </div>
    )
}

