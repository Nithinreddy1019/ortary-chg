
interface LinkButtonProps {
    isActive?: boolean,
    text: string
}

export const LinkButton = ({
    isActive,
    text
}: LinkButtonProps) => {
    return (
        <button className={`text-sm relative ${isActive ? "text-orange-600" : "text-neutral-600"}`}>
            <p className="p-3">{text}</p>
            {isActive && (
                <div className="w-10 h-0.5 bg-orange-600 absolute left-1/2 -translate-x-1/2 "></div>
            )}
        </button>
    )
}