import Link from "next/link";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import NavLinks from "./nav-links";
import { IoPower } from "react-icons/io5";


export default function SideNav () {
    return (
        <div className="flex w-full h-full flex-col px-6 py-4 md:px-6">
            <Link
            className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-950 p-4 md:h-40"
            href="/dashboard"
            >
                 <CgSmartHomeWashMachine className="bg-white" size={40} />
                 <p className="text-2xl text-white font-bold px-5">
                    AGP-Tech
                 </p>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                <form>
                    <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm 
                    font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                        <IoPower size={20} />
                        <div className="hidden md:block"> Déconnexion </div>
                    </button>
                </form>
            </div>
        </div>
    )
    
}