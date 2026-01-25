import { Hero } from "@/components/hero";
import { ModeToggle } from "../components/mode-toggle";
import { Logos } from "@/components/logo-cloud";
import { Features } from "@/components/features";
import { Speed } from "@/components/speed";
import { FeaturesSecondary } from "@/components/features-secondary";


export default function Home() {
  return (
    <div className="min-h-screen font-display">
      {/* <ModeToggle/>  */}
      <Hero/>
      <Logos/>
      <Features/>
      <Speed/>
      <FeaturesSecondary/>
    </div>
  );
}
