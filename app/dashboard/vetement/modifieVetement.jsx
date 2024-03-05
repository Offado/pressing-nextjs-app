'use client'

import { BiPlus } from "react-icons/bi";

export default function ModifieVetement () {
    return (
        <form className="grid lg:grid-cols-2 w-4/6 gap-5">
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


            <button type="submit" className="flex justify-center items-center gap-3 self-start rounded-md bg-yellow-500 px-6 py-2 text-xl font-medium text-white
                transition-colors hover:bg-yellow-500 md:text-base">
                    Modifier <span><BiPlus size={20} /></span>
            </button>

                
        </form>
    )
}