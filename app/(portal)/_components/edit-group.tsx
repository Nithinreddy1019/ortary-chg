import { Pencil, Trash2 } from "lucide-react"



export const Editgroup = () => {
    return (
        <div className="flex items-center gap-x-2 w-full">
            <button className="flex items-center justify-center px-2 py-2 text-orange-500 border border-orange-500 bg-orange-500/15 rounded-lg w-full">
                <Trash2 className="w-4 h-4 mr-1"/>
                <p className="text-xs">Delete job</p>
            </button>
            <button className="flex items-center justify-center px-2 py-2 text-white border border-orange-500 bg-orange-500 rounded-lg w-full">
                <Pencil className="w-4 h-4 mr-1"/>
                <p className="text-xs">Edit job</p>
            </button>
        </div>
    )
}