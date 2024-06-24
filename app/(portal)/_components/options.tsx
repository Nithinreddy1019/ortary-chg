import { LinkButton } from "./link-button"



export const Options = () => {
    return (
        <div className="border-b px-20 flex items-center gap-x-14 sticky top-0 bg-white">
            <LinkButton text="Job preview" isActive={true}/>
            <LinkButton text="Applicants" />
            <LinkButton text="Match" />
            <LinkButton text="Messages" />
        </div>
    )
}