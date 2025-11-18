import Image from "next/image";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-200 to-white relative overflow-hidden">

        {/* Card */}
        <div className="relative z-10 w-full max-w-md bg-white/60 backdrop-blur-xl shadow-xl rounded-3xl px-8 py-10 border border-white/30">

            {/* Title */}
            <h2 className="text-center text-2xl font-semibold text-black">Sign in with email</h2>
            <p className="text-center text-gray-600 text-sm mt-1 mb-6">
            Make a new doc to bring your words, data, and teams together. For free.
            </p>

            {/* Email Input */}
            <div className="space-y-4">
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-300 bg-white/80">
                <Image
                    src="/gmail.png"
                    alt="Gmail"
                    width={20}
                    height={20}
                    className="object-contain"
                />
                <input
                type="email"
                placeholder="Email"
                className="bg-transparent w-full outline-none text-black/50"
                />
            </div>

            {/* Password Input */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-300 bg-white/80">
                <Image
                    src="/key.png"
                    alt="Gmail"
                    width={20}
                    height={20}
                    className="object-contain"
                />
                <input
                type="password"
                placeholder="Password"
                className="bg-transparent w-full outline-none text-black/50"
                />
            </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right mt-2 mb-3">
            <a href="#" className="text-sm text-gray-600 hover:underline">
                Forgot password?
            </a>
            </div>

            {/* Button */}
            <button className="w-full rounded-full border border-[#6C8145] text-[#566738] hover:bg-[#6C8145] hover:text-white transition">
                Get Started
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <span className="text-sm text-gray-500">Or sign in with</span>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>

            {/* OAuth Buttons */}
            <div className="grid grid-cols-3 ">
                <button className="relative flex justify-center items-center bg-white px-13 hover:bg-gray-100">
                    <Image
                        src="/google.png"
                        alt="Google"
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                </button>
            </div>
        </div>
        </div>
    );
}
