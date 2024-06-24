import { CompanyIcon } from "./company-icon"


export const Company = () => {
    return (
        <div className="pl-24 py-8 flex flex-col gap-y-5">
            <CompanyIcon />
            <div className="flex gap-x-16">
                <div className="flex flex-col gap-y-5">
                    <div className="flex flex-col gap-y-2">
                        <p className="text-xs text-neutral-500">Company size</p>
                        <p className="text-xs">1k - 2k Employees</p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <p className="text-xs text-neutral-500">Sector</p>
                        <p className="text-xs">Information Technology, Infrastructure</p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <p className="text-xs text-neutral-500">Founded in</p>
                        <p className="text-xs">2019</p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-5">
                    <div className="flex flex-col gap-y-2">
                        <p className="text-xs text-neutral-500">Type</p>
                        <p className="text-xs">Private</p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <p className="text-xs text-neutral-500">Fundingr</p>
                        <p className="text-xs">Bootstrapped</p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <p className="text-xs text-neutral-500">Founded By</p>
                        <p className="text-xs">Scott Farquhar, Mike Cannon-Brookes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}