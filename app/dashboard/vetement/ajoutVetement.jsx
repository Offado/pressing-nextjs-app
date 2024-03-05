'use client'

import { BiPlus } from "react-icons/bi";

export default function AjoutVetement () {
    return (
        <form className="grid lg:grid-cols-2 w-4/6 gap-3">

            <div className="input-type">
                <input className="w-full p-2 border border-gray-950 rounded" type='text' name='typeClothes' placeholder="Type de Vêtements" />
            </div>
            <div className="input-type">
                <input className="w-[50%] p-2 border border-gray-950 rounded" type='number' name='price' placeholder="Prix" />
            </div>
            <div className="input-type">
                <input className="w-full p-2 border border-gray-950 rounded" type='number' name='numberClothes' placeholder="Nombre de Vêtements" />
            </div>
            <div className="input-type">
                <input className="w-[50%] p-2 border border-gray-950 rounded" type='number' name='price1' placeholder="Prix" />
            </div>

            <br />
            
            <button type="submit" className="flex justify-center text-md w-3/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50
            hover:border-green-500 hover:text-green-500">
                Ajouter <span><BiPlus size={25} className="px-1" /></span>
            </button>

                
        </form>
    )
}