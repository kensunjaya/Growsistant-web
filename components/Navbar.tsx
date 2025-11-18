import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="fixed top-5 left-3 right-3 min-h-[75px] w-[95%] mx-auto bg-white/50 z-[9999] border border-[#DDE2C4] rounded-full px-10 py-1 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <Image
          src="/logo.webp"
          className="cursor-pointer hover:scale-105 transition-transform"
          onClick={() => window.location.href = '#'}
          alt="Logo"
          width={40}
          height={0}
          priority
        />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex gap-10 text-[#4A4A4A] font-medium text-[15px]">
        <a href="#" className="relative transition-all duration-200 hover:text-[#B99470] hover:scale-110 active:scale-125 active:text-[#566738] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#B99470] after:transition-all after:duration-300 hover:after:w-full">Home</a>
        <a href="#" className="relative transition-all duration-200 hover:text-[#B99470] hover:scale-110 active:scale-125 active:text-[#566738] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#B99470] after:transition-all after:duration-300 hover:after:w-full">Series</a>
        <a href="#" className="relative transition-all duration-200 hover:text-[#B99470] hover:scale-110 active:scale-125 active:text-[#566738] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#B99470] after:transition-all after:duration-300 hover:after:w-full">Collection</a>
        <a href="#" className="relative transition-all duration-200 hover:text-[#B99470] hover:scale-110 active:scale-125 active:text-[#566738] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#B99470] after:transition-all after:duration-300 hover:after:w-full">How It Work?</a>
      </div>

      <Link href="/SignIn">
        <button className="px-5 py-2 rounded-full border-2 border-[#B99470] text-[#566738] hover:bg-[#B99470] hover:cursor-pointer hover:text-white transition">
          Sign In
        </button>
      </Link>
    </nav>
  )
}

export default Navbar;