import { cn } from "@/lib/utils"

export const Card = ({className,children}: {className?:string, children:React.ReactNode})=>{
    return (
        <div className={cn("bg-neutral-50 dark:bg-neutral-800 rounded-lg", className)}>

            {children}
        </div>
    )
}

export const CardContent = ({className,children }: {className?:string, children:React.ReactNode})=>{
    return (
        <div className={cn("px-4 md:px-8 pb-6 md:pb-12 flex item-center justify-between",className)}>
            {children}

        </div>
    )
}

export const CardTitle = ({className,children}:{className?:string, children:React.ReactNode})=>{
    return (
        <h3 className={cn("text-lg md:text-2xl font-bold font-display", className)}>
            {children}
        </h3>
    )
}

export const CardCTA =  ({className,children, ...rest}:React.ComponentProps<"button">)=>{
    return(
        <div>
            <button className={cn("size-5 md:size-10 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center shrink-0 active:scale-[0.92] transition duration-200", className)}
            {...rest}>
                {children}
            </button>
        </div>
    )
}

export const CardSkeleton = ({className,children}:{className?:string, children?: React.ReactNode})=>{
    return( 
        <div className={cn("relative h-40 md:min-h-80 overflow-hidden perspective-distant", className)}>
            {children}
        </div>
    )

}