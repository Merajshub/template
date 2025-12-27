import { Hero } from "@/components/hero";
import { ModeToggle } from "../components/mode-toggle";
import { Logos } from "@/components/logo-cloud";
import { Features } from "@/components/features";


export default function Home() {
  return (
    <div className="min-h-screen font-display">
      {/* <ModeToggle/>  */}
      <Hero/>
      <Logos/>
      <Features/>
    </div>
  );
}
