"use client"
import { cn } from "@/lib/utils"
import Image from "next/image"
import {easeOut, motion} from 'motion/react'

export const Landingimage = ()=>{
    return (
        <div className="pt-20 relative min-h-140 w-full perspective-distant">
            <motion.div
            initial={{
                opacity:0,
                y:-200
            }}
            animate={{
                opacity:1,
                y:0
            }}
            transition={{
                duration:0.5,
                ease: easeOut,

            }}
        
             className="perspective-[4000px]">
             <Image src="/demo-2.webp"
                    alt="Demo 1"
                    height={1080}
                    width={1920}
                    className={cn("absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20% shadow-2xl")}
                    style={{transform:"rotateY(20deg) rotateX(40deg) rotateZ(-20deg)"}}></Image>
            </motion.div>
            
            <motion.div
            initial={{
                opacity:0,
                y:-100
            }}
            animate={{
                opacity:1,
                y:0
            }}
            transition={{
                duration:0.5,
                ease: easeOut,
                delay:0.1

            }}
            className="perspective-[4000px] translate-x-20 -translate-y-40">
             <Image src="/demo-1.webp"
                    alt="Demo 1"
                    height={1080}
                    width={1920}
                    className={cn("absolute inset-0 rounded-lg mask-r-from-50% mask-b-from-50% shadow-2xl")}
                    style={{transform:"rotateY(20deg) rotateX(40deg) rotateZ(-20deg)"}}></Image>
            </motion.div>
        </div>
    )
}