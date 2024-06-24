import { SkillIcon } from "./skill-icon"



export const JobSkills = () => {
    return (
        <div className="pl-24 py-8 flex gap-x-24 border-b">
            <div className="flex flex-col items-start gap-y-2">
                <p className="text-xs text-neutral-500">Skills Required</p>
                <SkillIcon 
                    iconString="/image 1.png"
                    text="Figma"
                />
                <SkillIcon 
                    iconString="/image 2.png"
                    text="Adobe Illustrator"
                />
                <SkillIcon 
                    iconString="/image 6.png"
                    text="Adobe XD"
                />
            </div>
            <div className="flex flex-col items-start gap-y-2">
                <p className="text-xs text-neutral-500">Preferred Language</p>
                <p className="text-xs ">English</p>
            </div>
            <div className="flex flex-col items-start gap-y-2">
                <p className="text-xs text-neutral-500">Type</p>
                <p className="text-xs ">Full time</p>
            </div>
            <div className="flex flex-col items-start gap-y-2">
                <p className="text-xs text-neutral-500">Years of Experience</p>
                <p className="text-xs ">3+ Years of Experience</p>
            </div>
        </div>
    )
}