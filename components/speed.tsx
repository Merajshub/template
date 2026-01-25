import { Container } from "./container"
import { Heading } from "./heading"
import { Landingimage } from "./landing-image"
import { Subheading } from "./subheading"

export const Speed = ()=>{
    return <section className="pt-10 md:pt-20 lg:pt-32 px-4 relative overflow-hidden">

     <Container>
        <Heading as="h1">
                    Agents that do the work <br /> 
                    Approvals that keep you safe.
                </Heading>
                <Subheading className="py-8">
                Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.
                </Subheading>
                
                    <Landingimage firstImageSrc={"https://assets.aceternity.com/screenshots/4.jpg"}
                    secondImageSrc={"https://assets.aceternity.com/screenshots/4.jpg"}
                    // showGradient = {false}             
                    />

        
        </Container>
     </section>

}