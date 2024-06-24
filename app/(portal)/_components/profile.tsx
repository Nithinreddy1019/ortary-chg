import { Bell, ChevronDown } from "lucide-react"
import Image from "next/image"


export const Profile = () => {
    return (
        <div className="h-full flex items-center">
            <div className="relative">
                <Bell className="h-5 w-5 mr-2"/>
                <span className="w-1 h-1 bg-red-600 rounded-full absolute top-0.5 left-3"></span>
            </div>

            <div className="flex items-center gap-x-2">
                <Image 
                    src={"/progile.png"}
                    alt="Profile image"
                    width={25}
                    height={25}
                />
                <ChevronDown className="h-4 w-4"/>
            </div>
            
        </div>
    )
}