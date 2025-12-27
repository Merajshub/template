"use client"
import { cn } from "@/lib/utils"
import Image from "next/image"
import {easeOut, motion} from 'motion/react'

export const Landingimage = ()=>{
    return (
        <div className="relative">
        <div className="absolute inset-x-0 h-full w-full bg-white dark:bg-background dark:mask-r-from-30% mask-t-from-10% z-50"></div>
        <div className="relative pt-20 min-h-72 sm:min-h-80 md:min-h-100 lg:min-h-200 w-full perspective-distant translate-x-28">
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
             <Image src="https://assets.aceternity.com/screenshots/4.jpg"
                    alt="Demo 1"
                    height={1080}
                    width={1920}
                    className={cn("absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20% shadow-xl")}
                    style={{transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)"}}></Image>
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
            className="perspective-[4000px] translate-x-20 -translate-y-10 md:-translate-y-40 lg:-translate-y-40">
             <Image src="https://assets.aceternity.com/screenshots/3.jpg"
                    alt="Demo 1"
                    height={1080}
                    width={1920}
                    className={cn("absolute inset-0 -translate-x-10 rounded-lg mask-r-from-50% mask-b-from-50% shadow-xl")}
                    style={{transform:"rotateY(20deg) rotateX(40deg) rotateZ(-20deg)"}}></Image>
            </motion.div>
        </div>
          </div>
    )
}