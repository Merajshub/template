"use client"
import { motion } from "motion/react";
import Image from "next/image";

const logos = [
    
  {
    title: "Logo One",
    src: "https://assets.aceternity.com/logos/hello-patient.png"
  },
  {
    title: "Logo Two",
    src: "https://assets.aceternity.com/logos/openai.png"
  },
  {
    title: "Logo Three",
    src: "https://assets.aceternity.com/logos/granola.png"
  },
  {
    title: "Logo Four",
    src: "https://assets.aceternity.com/logos/characterai.png"
  },
  {
    title: "Logo Five",
    src: "https://assets.aceternity.com/logos/oracle.png"
  },
  {
    title: "Logo Six",
    src: "https://assets.aceternity.com/logos/portola.png"
  }
];


export const Logos = ()=>{
    return(
        <section className="">
            <h2 className="text-neutral-600 font-medium dark:text-neutral-400 text-lg text-center max-w-lg mx-auto">
            Trusted by modern operators across industries. <br /> {" "}
            <span className="text-neutral-400">From pilot to scale without chaos.</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 max-w-2xl mx-auto">
            

            {logos.map((item,index)=>(
            <motion.div key={index} 
            initial={{
              y:-10,
              opacity:0,
              filter:"blur(10px)"
            }}
            whileInView={{
              y:0,
              opacity:1,
              filter:"blur(0px)",
            }}
            transition={{
              duration:0.3,
              delay:index*0.1
            }}
            >
            <Image
            src={item.src}
            alt={item.title}
            key={index}
            width={100}
            height={100}
            className="size-20 object-contain mx-auto"
             
             />
             </motion.div>
            ))}
            </div>

        </section>
    )
}