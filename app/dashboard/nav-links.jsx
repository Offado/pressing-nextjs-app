'use client'

import { HiUserGroup } from "react-icons/hi2";
import { GoHomeFill } from "react-icons/go";
import { IoDocumentsOutline } from "react-icons/io5";
import { PiShirtFolded } from "react-icons/pi";
import { FcPlanner } from "react-icons/fc";
import { FaRegMessage } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const links = [
    { name: 'Accueil', href: '/dashboard', icon: <GoHomeFill size={25} />},
    { 
        name: 'Clients',
        href: '/dashboard/client',
        icon: <HiUserGroup size={25} />
    },
    {
        name: 'Vêtements',
        href: '/dashboard/vetement',
        icon: <PiShirtFolded size={25} />
    },
    {
        name: 'Rendez-vous',
        href: '/dashboard/planning',
        icon: <FcPlanner size={25} />
    },
    {
        name: 'Factures',
        href: '/dashboard/facture',
        icon: <IoDocumentsOutline size={25} />
    },
    {
        name: 'Messagerie',
        href: '/dashboard/messagerie',
        icon: <FaRegMessage size={20} />
    },
    {
        name: 'Profil',
        href: '/dashboard/users',
        icon: <FaUser size={20} />
    },
];

export default function NavLinks () {
    const pathname = usePathname()
    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-950 md:flex-none md:justify-start md:p-2 md:px-3',
                            {
                                'bg-sky-100 text-blue-600': pathname === link.href,
                            },
                        )}
                     >
                        <div className="w-6">{link.icon}</div>
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}