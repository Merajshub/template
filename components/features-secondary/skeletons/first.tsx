import { FileIcon, Hubsports, ProfileIcon, Salesforce, SettingIcon, Sheets } from "@/app/icons"
import { cn } from "@/lib/utils"

export const SkeletonOne = ()=>{
    return(
    <div className="flex-1 flex flex-col gap-2 rounded-t-3xl bg-neutral-100 border border-neutral-200 dark:border-neutral-700
        absolute max-w-sm mx-auto w-full h-full inset-x-0 p-2">          
            <Card 
            title="Human-in-the-loop" 
            description="Add reviews, approvals and escalations without slowing work."
            topIcon={<FileIcon/>}
            tags={[
                {text:"SalesForce", icon:<Salesforce className="size-4"/>},
                {text:"Hubsports", icon:<Hubsports className="size-4"/>},
                {text:"Sheets", icon:<Sheets className="size-4"/>}
            ]}

            />
            <Card 
            title="Define Processing Logic" 
            description="Create workflows, decision points, and conditional actions for each task."
            topIcon={<ProfileIcon/>}
            tags={[
                {text:"SalesForce", icon:<Salesforce className="size-4"/>},
                {text:"Hubsports", icon:<Hubsports className="size-4"/>},
                {text:"Sheets", icon:<Sheets className="size-4"/>}
            ]}

            />
            <Card 
            title="Define Processing Logic" 
            description="Create workflows, decision points, and conditional actions for each task."
            topIcon={<SettingIcon/>}
            tags={[
                {text:"SalesForce", icon:<Salesforce className="size-4"/>},
                {text:"Hubsports", icon:<Hubsports className="size-4"/>},
                {text:"Sheets", icon:<Sheets className="size-4"/>}
            ]}

            />

        </div>

    )

}

export const Card = ({
    title,
    description,
    topIcon,
    tags
    }:{
        title:string,
        description:string,
        topIcon:React.ReactNode,
        tags:{text:string, icon:React.ReactNode}[]
    })=>{

        const randomColors = ["var(--color-blue-500)","var(--color-red-500)","var(--color-green-500)"]
    return(
        <div className="p-4 bg-white shadow-black/10 border border-transparent rounded-[16px] gap-4
        ring-1 ring-black/10 flex flex-start">
            <div className={cn("bg-blue-500 shrink-0 flex items-center justify-center rounded-full size-6 mt-1",)} 
            style={{backgroundColor:randomColors[Math.floor(Math.random()* randomColors.length)]}}>
                {topIcon}
            </div>
            <div>
                <p className="text-lg font-bold text-neutral-800">{title}</p>
                <p className="text-sm text-neutral-500">
                {description}
                </p>
            <div className="mt-2 flex flex-row flex-wrap gap-2">
                {/* <Tag text="Salesforcce" icon={<Salesforce/>}/>
                <Tag text="Hubsports" icon={<Hubsports/>}/>
                <Tag text="Sheets" icon={<Sheets/>}/> */}
                {tags.map((tag)=>(
                    <Tag key={tag.text} text={tag.text} icon={tag.icon} />
                ))}
            </div>
            </div>

        </div>
    )
}

export const Tag = ({text,icon}:{text:string;icon:React.ReactNode})=>{
    return(
        <div className="flex gap-1 border border-neutral-200 items-center text-sm rounded-sm px-1 py-0.5">
       {icon}
       <p className="text-xs text-neutral-500">{text}</p>
        </div>
    )
}