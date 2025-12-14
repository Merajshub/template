import Link from "next/link"
import { Container } from "./container"
import { Logo } from "./logo"
import { Button } from "./ui/button"

export const Navbar = ()=>{
            const navLinks = [
                { title: "Products", href: "/products" },
                { title: "Features", href: "/features" },
                { title: "Social", href: "/social" },
                { title: "Pricing", href: "/pricing" },
            ]
    return <div className="border-b border-neutral-200 dark:border-neutral-800">
        <Container className="py-4 flex items-center justify-between">
            <Logo/>
            <div className="flex items-center gap-4">
                {navLinks.map((item)=>{
                    return <Link className="text-sm text-neutral-600 dark:text-neutral-400 font-medium" href={item.href} key={item.title}>{item.title}</Link>
                })}
            </div>
            <div className="flex items-center gap-4">
                <Link className="text-sm px-4 py-2 inline-block rounded-md text-neutral-600 dark:text-neutral-400 font-medium" href="/login">Login</Link>
                <Button>Signup</Button>

            </div>

        </Container>
      
    </div>
}