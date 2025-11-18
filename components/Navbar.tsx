import Image from "next/image"
import Link from "next/link"
import { useTailwindBreakpoint } from "./hooks/Breakpoint";
import { handleScrollTo } from "@/app/functions/navigation";

const Navbar = () => {
  return (
    <nav className="fixed landscape:gap-20 portrait:gap-5 top-5 left-0 right-0 min-h-[75px] w-fit mx-auto bg-white/50 z-9999 border border-[#DDE2C4] rounded-full px-10 py-1 flex items-center justify-between shadow-sm">
      <div className="flex items-center">
        <Image
          src="/logo.webp"
          className="cursor-pointer hover:scale-105 transition-transform"
          onClick={() => handleScrollTo('#home')}
          alt="Logo"
          width={40}
          height={0}
          priority
        />
      </div>

      <div className="flex items-center landscape:gap-10 portrait:gap-5 text-[#4A4A4A] font-medium text-md">
        <button onClick={() => handleScrollTo("#products")} className="relative cursor-pointer transition-all duration-200 hover:text-secondary hover:scale-110 active:scale-125 active:text-[#566738] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#B99470] after:transition-all after:duration-300 hover:after:w-full">Products</button>
        <button onClick={() => handleScrollTo("#plants")} className="relative cursor-pointer transition-all duration-200 hover:text-secondary hover:scale-110 active:scale-125 active:text-[#566738] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#B99470] after:transition-all after:duration-300 hover:after:w-full">Plants</button>
        <button onClick={() => handleScrollTo("#contact")} className="relative cursor-pointer transition-all duration-200 hover:text-secondary hover:scale-110 active:scale-125 active:text-[#566738] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#B99470] after:transition-all after:duration-300 hover:after:w-full">Contact</button>
      </div>

      {/* <Link href="/SignIn">
        <button className="px-5 py-2 rounded-full border-2 border-[#B99470] text-[#566738] hover:bg-[#B99470] hover:cursor-pointer hover:text-white transition">
          Sign In
        </button>
      </Link> */}
    </nav>
  )
}

export default Navbar;