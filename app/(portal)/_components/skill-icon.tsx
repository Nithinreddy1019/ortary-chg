import Image from "next/image"


interface SkillIconProps {
    iconString: string,
    text: string
}


export const SkillIcon = ({
    iconString,
    text
}: SkillIconProps) => {
    return (
        <div className="flex items-center gap-x-1 border rounded-lg px-1 py-0.5 shadow-[inset_0px_1px_3px_1px_#00000024]">
            <Image 
                src={iconString}
                alt="icon"
                width={20}
                height={20}
            />
            <p className="text-xs text-neutral-800">{text}</p>
        </div>
    )
}