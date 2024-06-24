import { LucideIcon } from "lucide-react"


interface ButtonProps {
    type: "primary" | "outline",
    children: React.ReactNode
}


export const Button = ({
    type,
    children
}: ButtonProps) => {

    const isPrimary = type === "primary";
    const isOutline = type === "outline";

    

    return (
        <>
            {isPrimary && (
                <button className="text-xs flex items-center bg-orange-600 text-white px-3 py-2 h-full rounded-full drop-shadow-lg">
                    {children}
                </button>
            )}
            {
                isOutline && (
                    <button className="relative text-xs text-neutral-600 flex items-center px-3 py-3 h-full rounded-full drop-shadow-lg">
                        {children}
                    </button>
                )
            }
        </>
    )
}