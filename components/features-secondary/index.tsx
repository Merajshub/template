import { cn } from "@/lib/utils"
import { Container } from "../container"
import { SkeletonOne } from "./skeletons/first"
import { SkeletonSecond } from "./skeletons/second"
import { FileIcon, IntegrationIcon, ProfileIcon, WorkflowIcon } from "@/app/icons"

export const FeaturesSecondary = ()=>{
    return <section className="pt-10 md:pt-20 lg:py-32 relative overflow-hidden">
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200
            dark:border-neutral-700 divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-neutral-700">
            <div>
                <CardContent>
                <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">Agent Studio</h2>
                <CardDescription>
                <p className="text-sm text-neutral-600 dark:text-neutral-700">Design, launch and customize AI agents for marketing, sales, 
                support and ops, built around your workflows.</p>
                </CardDescription>
                </CardContent>
           <CardSkeleton className="">
            <SkeletonOne/>
            </CardSkeleton>          
            </div>
            <div>
            <CardContent>
                <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">Multi-Agent Orchestration</h2>
                <CardDescription>                  
                <p className="text-sm text-neutral-600 dark:text-neutral-700">Coordinate multiple agents across workflows using memory, interrupts, and conditional logic.</p>
                </CardDescription>
            </CardContent>
           <CardSkeleton>
            {/* <SkeletonOne/> */}
            <SkeletonSecond/>
            </CardSkeleton>          
            </div>
            </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 md:mt-20">
            <div className="">
            <div className="flex items-center gap-2">
            <WorkflowIcon/>
            <h3>Workflow Automation</h3> 
            </div>
            <p className="text-sm text-neutral-500 mt-2">Automate campaigns, tickets and CRM updates without manual handoffs.</p>
            </div>
            <div>
            <div className="flex items-center gap-2">
            <IntegrationIcon/>
            <h3>Integration Fabric</h3> 
            </div>
            <p className="text-sm text-neutral-500 mt-2">Connect CRMs, service desks, data warehouses and cloud apps seamlessly.</p>
            </div>
            <div>
            <div className="flex items-center gap-2">
            <FileIcon className="text-red-3000"/>
            <h3>Human-in-the-Loop</h3> 
            </div>
            <p className="text-sm text-neutral-500 mt-2">Add reviews, approvals and escalations without slowing work.</p>
            </div>

           </div>
        </Container>
       
    </section>
}


export const CardContent = ({className,children}: {className?:string, children:React.ReactNode})=>{
    return (
        <div className="p-4 md:p-8">
            {children}
        </div>
    )
}


export const CardDescription = ({children}: {children:React.ReactNode})=>{
    return (
        <div className="text-neutral-600 mt-2 max-w-sm text-balance">
          {children}
        </div>
    )
}

export const CardSkeleton = ({className,children}:{className?:string, children?: React.ReactNode})=>{
    return( 
        <div className={cn("relative flex flex-col h-80 sm:h-60 md:min-h-80 overflow-hidden perspective-distant ", className)}>
            {children}
        </div>
    )

}