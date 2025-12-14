import { cn } from "@/lib/utils"

export const Container = ({children,className}: {children: React.ReactNode, className?: string})=>{
    return (
        <div className={cn("container max-w-6xl mx-auto", className)}>
            {children}
        </div>
    )
}