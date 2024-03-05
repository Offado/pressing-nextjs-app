'use client'

import { useReducer } from "react";
import { BiPlus } from "react-icons/bi";
import Success from "./success";
import Bug from "./bug";

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

export default function AjoutClient () {

    const [formData, setFormData] = useReducer(formReducer, {});

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.keys(formData).length == 0) return console.log("Pas de données de formulaire");
        console.log(formData);
    }

    //if(Object.keys(formData).length > 0) return <Bug message={"Erreur"} />

    return (
        <form className="grid lg:grid-cols-2 w-5/7 gap-5" onSubmit={handleSubmit}>
            <div className="input-type">
                <input className="w-[50%] p-2 border border-gray-950 rounded" type="text" onChange={setFormData} name="firstname" placeholder="Nom" />
            </div>
            <div className="input-type">
                <input className="w-[70%] p-2 border border-gray-950 rounded" type="text" onChange={setFormData} name="lastname" placeholder="Prénoms" />
            </div>
            <div className="input-type">
                <input className="w-[50%] p-2 border border-gray-950 rounded" type="text" onChange={setFormData} name="residence" placeholder="Domicile" />
            </div>
            <div className="input-type">
                <input className="w-[70%] p-2 border border-gray-950 rounded" type="text" onChange={setFormData} name="number" placeholder="Nombre de vêtements" />
            </div>
            <div className="input-type">
                <input className="w-[70%] p-2 border border-gray-950 rounded" type="text" onChange={setFormData} name="designation" placeholder="Désignation" />
            </div>
            <div className="input-type">
                <input className="border border-gray-950 px-3 py-2 focus:outline-none rounded-md" type="date" onChange={setFormData} name="date" placeholder="Date d'arrivée" />
            </div>
            <div className="input-type">
                <input className="w-[70%] p-2 border border-gray-950 rounded" type="text" onChange={setFormData} name="phone" placeholder="Numéro de téléphone" />
            </div>

            <br />

            <button type="submit" className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50
            hover:border-green-500 hover:text-green-500">
                Ajouter <span><BiPlus size={25} className="px-1" /></span>
            </button>

        </form>
    )
}