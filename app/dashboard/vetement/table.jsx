import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Table () {
    return (
        <>
            <h1 className="text-xl text-black font-medium">Inventaire et tarifs</h1><br />
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 border border-collapse border-black">
                            Type de vêtements
                        </th>
                        <th className="p-2 border border-collapse border-black">
                            Prix
                        </th>
                        <th className="p-2 border border-black">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr className="bg-white">
                        <td className=" border border-collapse border-black">
                            <span className="text-center items-center flex justify-center ml-2 text-sm text-gray-900">Jeans</span>
                        </td>
                        <td className=" border border-collapse border-black">
                            <span className="text-center items-center flex justify-center ml-2 text-sm text-gray-900">700</span>
                        </td>
                        <td className="flex justify-center items-center gap-5 border border-black">
                            <button type="submit" className="cursor"><FaEdit size={25} color="#22c55e" /></button>
                            <button type="submit" className="cursor"><MdDelete size={25} color="#ef4444" /></button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <br /><br />

            <h1 className="text-xl text-black font-medium">Tarifs pour un nombre de vêtements</h1><br />
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 border border-collapse border-black">
                            Nombre de vêtements
                        </th>
                        <th className="p-2 border border-collapse border-black">
                            Prix
                        </th>
                        <th className="p-2 border border-black">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr className="bg-white">
                        <td className=" border border-collapse border-black">
                            <span className="text-center items-center flex justify-center ml-2 text-sm text-gray-900">10</span>
                        </td>
                        <td className=" border border-collapse border-black">
                            <span className="text-center items-center flex justify-center ml-2 text-sm text-gray-900">1500</span>
                        </td>
                        <td className="flex justify-center items-center gap-5 border border-black">
                            <button type="submit" className="cursor"><FaEdit size={25} color="#22c55e" /></button>
                            <button type="submit" className="cursor"><MdDelete size={25} color="#ef4444" /></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}