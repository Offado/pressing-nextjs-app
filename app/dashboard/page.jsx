import { lusitana } from "../font";

export default function Page () {
    return (
        <div className={`${lusitana.className}text-2xl text-center text-gray-800 font-bold md:text-3xl md:leading-normal`}>
            Tableau de bord
        </div>
    )
}