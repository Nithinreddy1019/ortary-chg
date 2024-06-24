import { Layers, Layers2, MapPin } from "lucide-react";
import { Poppins } from "next/font/google"

interface JobProps {
    jobTitle: string,
    jobLocation: string,
    jobSalary: string,
    postedOn: string,
    status: string
}

const poppins = Poppins({subsets: ["latin"], weight: "700"})


export const Job = ({
    jobTitle,
    jobLocation,
    jobSalary,
    postedOn,
    status
}: JobProps) => {

    const isOpen = status ==="open";

    return (
        <div className="flex flex-col px-24 py-8 gap-y-8 border-b">
            <div className="flex items-center gap-x-2">
                <h1 className={`text-3xl font-bold text-neutral-700 ${poppins.className}`}>
                    {jobTitle}
                </h1>
                <div className="w-1 h-1 bg-neutral-400 rounded-full"></div>
                <p className="text-xs text-neutral-400">
                    {postedOn}
                </p>
                {
                    isOpen && (
                        <div className="flex items-center gap-x-1 bg-emerald-500/25 px-1 rounded-lg border border-emerald-500">
                            <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                            <p className="text-xs text-emerald-500">open</p>
                        </div>
                    )
                }
            </div>

            <div className="flex items-center gap-x-4">
                <div className="flex items-center gap-x-2 text-neutral-700">
                    <MapPin className="h-5 w-5"/>
                    <p>{jobLocation}</p>
                </div>
                <div className="w-1 h-1 bg-neutral-400 rounded-full"></div>
                <div className="flex items-center gap-x-2 text-neutral-700">
                    <Layers className="h-5 w-5"/>
                    <p>{jobSalary}</p>
                </div>
            </div>
            
        </div>
    )
}