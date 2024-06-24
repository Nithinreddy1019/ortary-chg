import { LucideIcon } from "lucide-react"


interface DataProps {
    icon: LucideIcon,
    text: string,
    number: number
}

export const Data = ({
    icon: Icon,
    text,
    number
}: DataProps) => {
    return (
        <div className="flex items-center justify-between text-neutral-700 px-2 py-4 pb-6 border-b">
            <div className="flex items-center gap-x-2 ">
                <Icon className="w-4 h-4"/>
                <p className="text-xs">{text}</p>
            </div>
            <div>
                <p className="text-sm">{number}</p>
            </div>
        </div>
    )
}