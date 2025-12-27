import { Heading } from "./heading"
import { Container } from "./container"
import { Subheading } from "./subheading"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Landingimage } from "./landing-image"

export const Hero = ()=>{
    return (
        <section className="pt-10 md:pt-20 lg:pt-32 px-4 relative overflow-hidden">
            <Container>
                <Heading as="h1">
                    Agents that do the work <br /> Approvals that keep you safe.
                </Heading>
                <Subheading className="py-8">
                Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.
                </Subheading>
                <div className="flex items-center gap-6">
                    <Button className="shadow-brand">Start your free trail</Button>
                    <Button variant="outline">
                        <Link href="#" >View role based demos</Link></Button>
                </div>
                
                    <Landingimage/>
                
            </Container>
        </section>
    )

}