


export const JobDescription = () => {
    return (
        <div className="px-24 py-8 space-y-2 border-b">
            <p className="text-xs text-neutral-500">About the job</p>
            <ol className="text-xs space-y-2">
                <li>
                    1. Handle the UI/UX research design
                </li>
                <li>
                    2. Work on researching on latest web applications designs & trends
                </li>
                <li>
                    3. Work on conceptualizing and visualizing
                </li>
                <li>
                    4. Work on creating graphics content and other graphic related works
                </li>
            </ol>
            <div className="space-y-1.5">
                <p className="text-xs">Benefits:</p>
                <div className="flex items-center gap-x-2 pl-4">
                    <div className="w-1 h-1 bg-neutral-800 rounded-full"></div>
                    <p className="text-xs">Health Insurance</p>
                </div>
                <div className="flex items-center gap-x-2 pl-4">
                    <div className="w-1 h-1 bg-neutral-800 rounded-full"></div>
                    <p className="text-xs">Provident Fund</p>
                </div>
            </div>
            <div className="space-y-1.5">
                <p className="text-xs">Schedule:</p>
                <div className="flex items-center gap-x-2 pl-4">
                    <div className="w-1 h-1 bg-neutral-800 rounded-full"></div>
                    <p className="text-xs">Day Shift</p>
                </div>
            </div>
            <div className="space-y-1.5">
                <p className="text-xs">Supplemental pay types:</p>
                <div className="flex items-center gap-x-2 pl-4">
                    <div className="w-1 h-1 bg-neutral-800 rounded-full"></div>
                    <p className="text-xs">Performance bonus</p>
                </div>
            </div>
        </div>
    )
}