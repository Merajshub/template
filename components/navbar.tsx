"use client"
import Link from "next/link"
import { Container } from "./container"
import { Logo } from "./logo"
import { Button } from "./ui/button"
import { IconLayoutSidebarLeftCollapse, IconX } from "@tabler/icons-react"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ModeToggle } from "./mode-toggle"



const navLinks = [
    { title: "Products", href: "/products" },
    { title: "Features", href: "/features" },
    { title: "Social", href: "/social" },
    { title: "Pricing", href: "/pricing" },
]


export const Navbar = ()=>{
    return <nav className="border-b border-neutral-200 dark:border-neutral-800">
        <Desktopnavbar/>
        <Mobilenavbar/>
             
    </nav>
}

const Mobilenavbar = ()=>{
    const [open,setOpen] = useState(false)
    // console.log(open);
    
    return (
        <div className="flex md:hidden w-full px-4 py-2 justify-between">
            <Logo/>
            
            <button onClick={()=> setOpen(!open)}>
            <IconLayoutSidebarLeftCollapse className="size-4"/>
            </button>
            <AnimatePresence>
            {open &&
                (<motion.div
                initial={{
                    opacity:0
                }}
                animate={{
                    opacity:1,
                    backdropFilter: "blur(15px)"
                }}
                exit={{
                    opacity:0,
                    backdropFilter:"blur(0px)"
                }}
                transition={{
                    duration:0.3
                }}
                className="fixed inset-0 h-full w-full z-50 px-4 py-2">
                <div className="flex justify-between">
                <Logo/>
                <button className="absolute right-4 top-3" onClick={()=>setOpen(false)}>
                    <IconX className="size-4"/>
                </button>
                </div>

                <div className="flex flex-col gap-6 my-10 ">
                    {navLinks.map((item,index)=>(
                        <motion.div
                        initial={{
                            opacity:0,
                            x:-4
                        }}
                        animate={{
                            opacity:1,
                            x:0
                            
                        }}
                        transition={{
                            duration:0.3,
                            delay:index*0.1
                        }}
                        key={index}
                        >
                            <Link className="text-2xl text-neutral-600 dark:text-neutral-400 font-medium" href={item.href} key={item.title}>{item.title}</Link>
                        </motion.div>
                    ))}
                </div>

            </motion.div>)}</AnimatePresence>

        </div>
    )
}


export const Desktopnavbar = ()=>{
    return(
    <Container className="py-4 items-center justify-between hidden lg:flex">
    
    <Logo/>
    <div className="flex items-center gap-10">
        {navLinks.map((item)=>{
            return <Link className="text-sm text-neutral-600 dark:text-neutral-400 font-medium" href={item.href} key={item.title}>{item.title}</Link>
        })}
    </div>
    <div className="flex items-center gap-4">
        <Link className="text-sm px-4 py-2 inline-block rounded-md text-neutral-600 dark:text-neutral-400 font-medium" href="/login">Login</Link>
        <Button>Signup</Button>
        <ModeToggle/>

    </div>

</Container>
    )

}