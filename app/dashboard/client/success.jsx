import { BiCheck } from "react-icons/bi";

export default function Success ({message}) {
    return (
        <div className="container mx-auto success">
            <div className="flex justify-center mx-auto border border-yellow-200 bg-yellow-400 w-3/6 text-gray-900 text-md my-4 py-2
            text-center bg-opacity-5">
                {message} <BiCheck size={24} color="#4ade80" />
            </div>
        </div>
    )
}