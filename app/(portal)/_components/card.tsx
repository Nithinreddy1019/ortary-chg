import Image from "next/image"




export const Card = () => {
    return (
        <div className="space-y-6 shadow-[0px_9px_20px_4px_#00000024] p-8 rounded-xl">
            <p className="text-sm font-bold">“A quote from a Atlassian.”</p>
            <div className="flex items-center gap-x-3">
                <Image
                    src={"/Avatar.png"}
                    alt="avatar"
                    width={30}
                    height={30}
                />
                <div className="flex flex-col">
                    <p className="text-xs font-bold">Name</p>
                    <p className="text-xs">Description</p>
                </div>
            </div>
        </div>
    )
}