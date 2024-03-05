'use client'

import { BiSolidUserPlus } from "react-icons/bi";
import Table from './table';
import Form from "./form";
import { useState } from "react";
import { lusitana } from "@/app/font";

export default function Page () {

    const [visible, setVisible] = useState(false);

    const handler = () => {
        setVisible(!visible);
    }

    return (
        <>
        
        <div className={`${lusitana.className}text-2xl text-center text-gray-800 font-bold md:text-3xl md:leading-normal`}>
            Clients
        </div>
        

        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="p-10 left flex gap-3">
            <button onClick={handler} className="flex items-center gap-5 self-start rounded-md bg-blue-950  px-6 py-3 text-xl font-medium text-white
            transition-colors hover:bg-blue-900 md:text-base">
                    Nouveau client <span><BiSolidUserPlus size={25} /></span>
            </button>
          </div> 
        </div>

         {/* Formulaire pliable */}
       
            { visible ? <Form></Form> : <></>}
        

        {/* Tableau de Liste des clients */}

        <div className="container mx-auto">
            <Table></Table>
        </div>
        
        </>
    )
}