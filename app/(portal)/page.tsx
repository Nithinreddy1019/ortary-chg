import { Eye, MessageSquare, User2, UserRoundCheck, Users } from "lucide-react";
import { Company } from "./_components/company";
import { Editgroup } from "./_components/edit-group";
import { Job } from "./_components/job";
import { JobDescription } from "./_components/job-description";
import { JobSkills } from "./_components/job-skills";
import { Data } from "./_components/data";
import { Card } from "./_components/card";

const Landing = () => {
    return (
        <div className="flex">
            <main className="flex-1 flex flex-col h-full">
                <Job 
                    jobTitle="Senior Product Designer"
                    jobLocation="Delaware, USA"
                    jobSalary="$300k - $400k"
                    postedOn="posted 2 days ago"
                    status="open"
                />

                <JobSkills />

                <JobDescription />

                <Company />
            </main>
            <div className="w-80 border py-8 px-8 space-y-4">
                <Editgroup />
                <Data 
                    icon={Users}
                    text="Applicants"
                    number={400}
                />
                <Data 
                    icon={UserRoundCheck}
                    text="Matches"
                    number={100}
                />
                <Data 
                    icon={MessageSquare}
                    text="Messages"
                    number={147}
                />
                <Data 
                    icon={Eye}
                    text="Views"
                    number={800}
                />
                <Card />
            </div>
        </div>
    )
}


export default Landing;