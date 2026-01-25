import { IconCheck, IconCircleCheckFilled, IconCircleDashedCheck, IconLoader2, IconRipple } from "@tabler/icons-react"
import { SkeletonCard } from "./first"
import { cn } from "@/lib/utils"

export const Skeletontwo = ()=>{
    return (
       <div 
       className={cn("max-w-[85%] group h-full my-auto mx-auto w-full bg-neutral-100 dark:bg-neutral-700 p-3 rounded-2xl border",
            "border-neutral-300 dark:border-neutral-700 shadow-2xl flex flex-col",
            "mask-radial-from-50% mask-b-from-50%",
            "[--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10",
            "-rotate-z-20 rotate-x-20 rotate-y-20 translate-x-10"
        )}>
            <div className="flex gap-3 items-center">
            <IconCircleDashedCheck className="size-4"/>
                <p className="text-sm font-normal text-black dark:text-white">
                Campaign planner
                </p>
            </div>
            <div className="relative flex-1 mt-4 rounded-2xl border border-neutral-200 bg-neutral-200 dark:bg-neutral-700">
            <Pattern/>
            <div className="absolute inset-0 translate-x-5 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300
            bg-white scale-105 group-hover:scale-100 rounded-2xl h-full w-full">
            <Row 
            title = 'Fetching Data' 
            icon = {<IconCheck className="size-4 text-white"/>} 
            time={'10S'}
            variant="success"
            />
            <GradientHr/>
            <Row 
            title = 'Processing Data' 
            icon = {<IconCheck  className="size-4 text-white "/>} 
            time='20S'
            variant="success"
            />
            <GradientHr/>
            <Row 
            title = 'Performing Action' 
            icon = {<IconCheck  className="size-4 text-white "/>} 
            time='30S'
            variant="success"
            />
            <GradientHr/>
            <Row 
            title = 'Waiting for Approval' 
            icon = {<IconCheck  className="size-4 text-white"/>} 
            time='40S'
            variant="success"
            />
            <GradientHr/>
            <Row 
            title = 'Generating Report' 
            icon = {<IconLoader2 className="size-4 text-white  animate-spin"/>} 
            time={'10S'}
            variant="warning"
            />
            
            </div>
            </div>
            
           

        </div>

    )
}

const GradientHr = ()=>{
    return <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-700 to transparent"></div>
}

export const Row = ({
    title,
    icon,
    time,
    variant
   }:{
    title: string, 
    icon: React.ReactNode,
    time:string,
    variant: "success" | "warning" | "danger"
    })=>{
    return <div className="flex justify-between px-4 py-2">

    <div className="flex items-center gap-2">
    <div className={cn("size-4 flex items-center justify-center rounded-full",
         variant==="danger" && "bg-red-300 ",
         variant==="success" && "bg-green-400",
         variant==="warning" && "bg-yellow-400",
    )}>
    {icon}
    </div>
    <p className="text-neutral-500 font-medium text-sm">{title}</p>
    </div>

    <div className="flex items-center gap-1 text-neutral-400">
    <IconRipple className="size-3"/>
    <p className="text-[10px] font-bold ">{time}</p>
    </div>

    </div> 
}

export const Pattern = ()=>{
    return <div className="absolute inset-0 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)]
     bg-[size:10px_10px] bg-fixed">

    </div>

}

