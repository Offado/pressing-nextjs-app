import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


export default function Table () {
    return (
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-100">
                    <th className="px-8 py-2 border border-collapse border-black">
                        <span>Nom</span>
                    </th>
                    <th className="px-8 py-2 border border-collapse border-black">
                        <span>Prénoms</span>
                    </th>
                    <th className="px-8 py-2 border border-collapse border-black">
                        <span>Domicile</span>
                    </th>
                    <th className="px-8 py-2 border border-collapse border-black">
                        <span>Nombre de vêtements</span>
                    </th>
                    <th className="px-8 py-2 border border-collapse border-black">
                        <span>Désignation</span>
                    </th>
                    <th className="px-8 py-2 border border-collapse border-black">
                        <span>Date de reception</span>
                    </th>
                    <th className="px-8 py-2 border border-collapse border-black">
                        <span>Numéro de téléphone</span>
                    </th>
                    <th className="px-8 py-2 border border-collapse border-black">
                        <span>Actions</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white">
                <tr className="bg-white">
                    <td className="px-6 py-2 border border-collapse border-black">
                        <span className="text-center items-center flex justify-center ml-2 text-sm text-gray-900">Daly</span>
                    </td>
                    <td className="px-6 py-2 border border-collapse border-black">
                        <span className="text-center items-center flex justify-center ml-2 text-sm text-gray-900">Cédrick</span>
                    </td>
                    <td className="px-6 py-2 border border-collapse border-black">
                        <span className="text-center items-center flex justify-center ml-2 text-sm text-gray-900">Niangon à gauche T 27</span>
                    </td>
                    <td className="px-6 py-2 border border-collapse border-black">
                        <span className="text-center items-center flex justify-center ml-2 text-sm text-gray-900">6</span>
                    </td>
                    <td className="px-6 py-2 border border-collapse border-black">
                        <span className="text-sm text-gray-900">
                            Jeans (bleu, blanc), 2 Jeans noirs et 2 Tee-shirts
                        </span>
                    </td>
                    <td className="px-6 py-2 border border-collapse border-black">
                        <span className="text-center items-center flex justify-center ml-2 text-sm text-gray-900">06-03-2024</span>
                    </td>
                    <td className="px-6 py-2 border border-collapse border-black">
                        <span className="text-center items-center flex justify-center ml-2 text-sm text-gray-900">0787552527</span>
                    </td>
                    <td className="px-6 py-2 items-center justify-center border border-collapse border-black">
                        <button type="submit" className="cursor"><FaEdit size={25} color="#22c55e" /></button><br /><br />
                        <button type="submit" className="cursor"><MdDelete size={25} color="#ef4444" /></button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}