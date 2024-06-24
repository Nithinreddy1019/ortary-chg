import Image from "next/image"

export const CompanyIcon = () => {
    return (
        <div className="flex items-center gap-x-3">
            <Image 
                src={"/Rectangle 43.png"}
                alt="company icon"
                width={30}
                height={30}
            />
            <p className="text-sm text-neutral-700">
                Atlassian
            </p>
            <button className="text-blue-800 bg-blue-100 text-xs font-bold px-3 py-1 rounded-lg shadow-[0px_3px_3px_2px_#00000024]">
                Follow
            </button>
        </div>
    )
}