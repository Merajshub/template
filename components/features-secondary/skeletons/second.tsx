import { FileIcon, InstaIcon, MetaIcon, Sheets, SlackIcon } from "@/app/icons"
import { LogoIcon } from "@/components/logo"
import { cn } from "@/lib/utils"
import { IconCircleDashedCheck } from "@tabler/icons-react"

export const SkeletonSecond = ()=>{
    return(
       <div className="flex-1 flex items-center justify-center gap-2 rounded-t-3xl absolute w-full h-full inset-x-0 p-2"
       style={{
        transform:"rotateY(20deg) rotateX(20deg) rotateZ(-20deg)"
       }}
       > 
       <Circle className="size-40 border-neutral-200 flex items-center justify-center shadow-sm">
       <LogoIcon className="size-10 text-neutral-400"/>
       <RevolvingCard className="">
       <SlackIcon className="size-6"/>
       </RevolvingCard>
       <RevolvingCard className="[--translate-position:160px] [--orbit-duration:15s]">
       <MetaIcon className="size-6 text-blue-500"/>
       </RevolvingCard>
       <RevolvingCard className="[--translate-position:160px] [--orbit-duration:20s] ring-0 bg-transparent size-auto w-65">
       <SkeletonCard
       className="absolute bottom-0 left-12 z-30 max-w-[90%]"
       icon={<IconCircleDashedCheck className="size-4"/>} 
       title="Campaign Planner" 
       description="Creates clear, ready-to-use campaign briefs using product info."
    //    badge={<Badge variant="danger" text="120s"/>} 
       ></SkeletonCard>
       </RevolvingCard>
       <RevolvingCard className="[--translate-position:190px] [--orbit-duration:25s] ">
       <InstaIcon className="size-8 text-red-500"/>
       </RevolvingCard>
       <RevolvingCard className="[--translate-position:220px] [--orbit-duration:30s] ">
       <Sheets className="size-6"/>
       </RevolvingCard>
       </Circle>
       <Circle className="bg-neutral-100/80 shadow border-neutral-100 size-60 z-9 relative">
       
       </Circle>
       <Circle className="bg-neutral-100/60 shadow border-neutral-100 size-80 z-8"></Circle>
       <Circle className="bg-neutral-100/40 shadow border-neutral-100 size-100 z-7"></Circle>
       <Circle className="bg-neutral-100/20 shadow border-neutral-100 size-120 z-6"></Circle>
       {/* <Circle className="size-60 bg-gray-200"/>
       <Circle className="size-40 bg-green-200"/>
       <Circle className="size-30 bg-yellow-200"/> */}
        </div>
    )
}

const RevolvingCard = ({children, className}:{
    children:React.ReactNode,
    className?:string
})=>{
    return(
        <div className={cn("size-8 absolute inset-0 m-auto flex items-center justify-center border border-transparent shadow-black/10",
        "ring-1 ring-black/10 rounded-sm animate-orbit  [--translate-position:120px] [--orbit-duration:10s]",className)}>
            {children}
        </div>

    )

}

export const Circle = ({className,children}:{className?:string, children?:React.ReactNode})=>{
    return(
        <div className={cn("bg-white border-transparent rounded-full z-10 absolute inset-0 m-auto",className)}>
            {children}
        </div>
        
    )
}


export const SkeletonCard = ({icon, title, description,badge, className}:{
    icon:React.ReactNode,
    title:string,
    description?:string,
    badge?:React.ReactNode
    className:React.ReactNode
    })=>{
    return(
        <div className={cn("max-w-[85%] h-fit my-auto mx-auto w-full bg-white dark:bg-neutral-700 p-3 rounded-lg border",
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
            <p className="text-xs font-normal text-neutral-400 dark:text-neutral-400 mt-3">
            {description}
            </p>
            {/* <div className="flex flex-wrap items-center gap-2 mt-4 ">
            <Tags text="Google Ads"></Tags>
            <Tags text="SaaS"></Tags>
            <Tags text="Content"></Tags>
            </div> */}
           

        </div>
    )
}