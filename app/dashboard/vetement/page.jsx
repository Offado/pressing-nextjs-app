'use client'

import { lusitana } from "@/app/font";
import Form from "./form";
import Table from "./table";
import { BiPlus } from "react-icons/bi";
import { useState } from "react";



export default function Page () {

  const [visible1, setVisible1] = useState(false);

  const handler1 = () => {
    setVisible1(!visible1);
  }
    return (
      <>
        <div className={`${lusitana.className}text-2xl text-center text-gray-800 font-bold md:text-3xl md:leading-normal`}>
            Inventaire et tarif des vêtements
        </div>

        <div className="container mx-auto flex justify-between py-5 border-b">
            <div className="p-10 left flex gap-3">
              <button onClick={handler1} className="flex justify-center items-center gap-3 self-start rounded-md bg-blue-950  px-6 py-2 text-xl font-medium text-white
                transition-colors hover:bg-blue-900 md:text-base">
                    Ajouter 
              </button>
            </div>
        </div>


        
              {/* Formulaire pliable */}

              { visible1 ? <Form></Form> : <></>}


        {/* Tableau de Liste des vêtements */}

        <div className="container mx-auto">
          <Table></Table>
        </div>

      </>

        
    )
}