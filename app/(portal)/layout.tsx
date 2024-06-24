import { Navbar } from "./_components/navbar"
import { Options } from "./_components/options";


const PortalLayout = ({
    children
}: {children: React.ReactNode}) => {
    return(
        <div className="h-full relative">
            <Navbar />
            <Options />
            {children}
        </div>
    )
}


export default PortalLayout;