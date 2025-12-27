import { cn } from "@/lib/utils"
import { IconCircleDashedCheck, IconClock, IconExclamationCircle, IconPrison, IconRipple } from "@tabler/icons-react"

export const Skeletonone = ()=>{
    return (
        <div className="perspective-distant h-full w-full -translate-y-10 mask-radial-from-50% mask-r-from-50%"
        style={{
            transform:"rotateZ(8deg) rotateY(-20deg) rotateX(20deg) scale(1.2)"
        }}>
        <SkeletonCard
        className="absolute bottom-0 left-12 z-30 max-w-[90%]"
        icon={<IconCircleDashedCheck className="size-4"/>} title="Campaign Planner" 
        description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
        badge={<Badge variant="danger" text="120s"/>}/>

        <SkeletonCard
        className="absolute left-8 bottom-10 z-20"
        icon={<IconExclamationCircle className="size-4"/>} title="Issue Tracker" 
        description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
        badge={<Badge variant="success" text="10s"/>}/>

        <SkeletonCard
        className="absolute left-4 bottom-20 max-w-[80%] z-10"
        icon={<IconPrison className="size-4"/>} title="Risk  Analysis" 
        description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
        badge={<Badge variant="warning" text="40s"/>}/>
        </div>
    )
}

// export const SkeletonCard = ({icon, title, description,badge}:{
//     icon:React.ReactNode,
//     title:string,
//     description:string,
//     badge:React.ReactNode
//     })=>{
//     return(
//         <div className="max-w-[90%] mx-auto w-full bg-neutral-100 dark:bg-neutral-700 p-3 rounded-lg border border-neutral-200">
//             <div className="flex gap-3 items-center">
//                 <IconCircleDashedCheck className="size-4"/>
//                 <p className="text-sm font-bold">
//                 Campaign Planner
//                 </p>
//                 <Badge variant="danger" text="120s"/>
//             </div>
//             <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mt-3">
//             Creates clear, ready-to-use campaign briefs using product info, audience data, and past results.
//             </p>
//             <div className="flex flex-wrap items-center gap-2 mt-4 ">
//             <Tags text="Google Ads"></Tags>
//             <Tags text="SaaS"></Tags>
//             <Tags text="Content"></Tags>
//             </div>
           

//         </div>
//     )
// }

export const Tags = ({text}:{text:string})=>{
    return(
   
        <div className="px-2 text-xs py-1 rounded-sm bg-neutral-200 dark:bg-neutral-700">
        {text}
        </div>
    
    )
}

export const Badge=({
    variant = 'success',
    text,
}: {variant:"danger" | "success" |"warning" , 
    text:string})=>{
         
    return(
        <div className={cn("px-1 py-0.5 rounded-full border flex items-center gap-1 w-fit",
            variant==="danger" && "bg-red-300/20 border-red-300 text-red-500",
            variant==="success" && "bg-green-300/20 border-green-300 text-green-500",
            variant==="warning" && "bg-yellow-300/20 border-yellow-300 text-yellow-500",
        )
           
        }>
         <IconClock className={cn("size-3")}/>
         <IconRipple className={cn("size-3")}/>   
            
        <p className="text-[10px] font-bold">{text}</p>

        </div>
    )
}

export const SkeletonCard = ({icon, title, description,badge, className}:{
    icon:React.ReactNode,
    title:string,
    description?:string,
    badge:React.ReactNode
    className:React.ReactNode
    })=>{
    return(
        <div className={cn("max-w-[85%] h-fit my-auto mx-auto w-full bg-neutral-100 dark:bg-neutral-700 p-3 rounded-lg border",
            "border-neutral-200 dark:border-neutral-500 shadow-2xl",
            className
        )}>
            <div className="flex gap-3 items-center">
                {icon}
                <p className="text-sm font-normal text-black dark:text-white">
                {title}
                </p>
                {badge}
            </div>
            <p className="text-sm font-normal text-neutral-400 dark:text-neutral-400 mt-3">
            {description}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-4 ">
            <Tags text="Google Ads"></Tags>
            <Tags text="SaaS"></Tags>
            <Tags text="Content"></Tags>
            </div>
           

        </div>
    )
}