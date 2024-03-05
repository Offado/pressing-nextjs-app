'use client'

import { lusitana } from "@/app/font";
import Table from "./table";

export default function Page () {
    return (
        <>
            <div className={`${lusitana.className}text-2xl text-center text-gray-800 font-bold md:text-3xl md:leading-normal`}>
                Rendez-vous
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br />

            <div className="container mx-auto">
                <Table></Table>
            </div>
        </>
    )
}