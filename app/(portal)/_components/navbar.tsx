import { Briefcase, HandCoins, MessageSquare, Users } from "lucide-react"
import { Button } from "./button"
import { Logo } from "./logo"
import { Profile } from "./profile"


export const Navbar = () => {
    return (
        <nav className="h-fit border-b p-3">
            <div className="flex items-center justify-between h-full">
                <Logo />

                <div className="h-full flex items-center gap-x-2">
                    <Button
                        type="primary"
                    >
                        <Briefcase className="h-4 w-4 mr-2"/>
                        <p>Jobs</p>
                    </Button>
                    <div className="border rounded-3xl h-full flex items-center shadow-[inset_0px_2px_2px_0px_#00000024]">
                        <Button type="outline">
                            <MessageSquare className="h-4 w-4 mr-2"/>
                            <span className="w-1 h-1 bg-red-600 rounded-full absolute top-3 left-6"></span>
                            <p>Messages</p>
                        </Button>
                        <Button type="outline">
                            <HandCoins className="h-4 w-4 mr-2"/>
                            <p>Payments</p>
                        </Button>
                        <Button type="outline">
                            <Users className="h-4 w-4 mr-2"/>
                            <p>Applicants</p>
                        </Button>
                    </div>
                </div>

                <Profile />
            </div>
        </nav>
    )
}