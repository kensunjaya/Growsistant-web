"use client";

import Image from "next/image";
import { useState } from "react";
import Link from 'next/link';

export default function Home() {
  const [images, setImages] = useState([
    "/gambarKiri.png",
    "/product.png",
    "/gambarHujan.png",
  ]);

  const rotateLeft = () => {
    const first = images.shift()!;
    setImages([...images, first]);
  };

  const rotateRight = () => {
    const last = images.pop()!;
    setImages([last, ...images]);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="relative w-full h-[1000px] overflow-hidden rounded-b-[60px] mt-1">
        <Image
          src="/bgLanding.png"
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-0 px-20 py-52">
          <h1 className="text-[55px] font-extrabold leading-tight">
            <span className="text-[#9B6A4A]">GARDEN</span><br />
            <span className="text-[#6C8145]">MINIMALIS,</span><br />
            <span className="text-[#9B6A4A]">PANEN</span><br />
            <span className="text-[#6C8145]">MAKSIMALIS.</span>
          </h1>
        </div>
      </section>


      {/* NAVBAR */}
      <nav className="fixed top-5 left-3 right-3 w-[95%] mx-auto bg-white/50 border border-[#DDE2C4] rounded-full px-10 py-1 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <Image
            src="/logoGrowsistant.png"
            alt="Logo"
            width={70}
            height={20}
            priority
          />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex gap-10 text-[#4A4A4A] font-medium text-[15px]">
          <a href="#" className="relative transition-all duration-200 hover:text-[#B99470] hover:scale-110 active:scale-125 active:text-[#566738] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#B99470] after:transition-all after:duration-300 hover:after:w-full">Home</a> 
          <a href="#" className="relative transition-all duration-200 hover:text-[#B99470] hover:scale-110 active:scale-125 active:text-[#566738] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#B99470] after:transition-all after:duration-300 hover:after:w-full">Series</a> 
          <a href="#" className="relative transition-all duration-200 hover:text-[#B99470] hover:scale-110 active:scale-125 active:text-[#566738] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#B99470] after:transition-all after:duration-300 hover:after:w-full">Collection</a> 
          <a href="#" className="relative transition-all duration-200 hover:text-[#B99470] hover:scale-110 active:scale-125 active:text-[#566738] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#B99470] after:transition-all after:duration-300 hover:after:w-full">How It Work?</a>
        </div>

        <Link href = "/SignIn">
          <button className="px-5 py-2 rounded-full border border-[#B99470] text-[#566738] hover:bg-[#B99470] hover:text-white transition">
            Sign In
          </button>
        </Link>
      </nav>


      {/* ABOUT SECTION */}
      <section className="w-full flex items-center justify-between px-24 py-16">
          {/* LEFT CONTENT */}
          <div className="max-w-xl space-y-4">
            <h2 className="text-4xl font-light tracking-[0.2em] text-black">
              Get To Know Our
            </h2>

            <h3 className="text-5xl font-semibold text-[#6C8145]">
              Growsistant
            </h3>

            <p className="text-black/70 leading-relaxed">
              A mini smart garden that automatically takes care of your plants. Perfect for apartments, boarding houses, and busy urban lifestyles.
            </p>

            <button className="inline-block px-8 py-2 rounded-full border border-[#6C8145] text-[#566738] hover:bg-[#6C8145] hover:text-white transition">
              Explore
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-[430px] h-[500px] flex justify-center items-center">
            {/* Background Box */}

            <div className="absolute w-[350px] h-[430px] bg-[#A7B88C] rounded-[30px] right-0 top-0 -z-10"></div>

            {/* Product Image */}

            <Image
              src="/product.png"
              alt="Growsistant Product"
              width={430}
              height={500}
              className="object-contain"
            />

            
          </div>
        </section>



      {/* CAROUSEL SECTION */}
      <section className="flex flex-col items-center ">
        <h2 className="text-4xl font-light tracking-[0.2em] text-[#6C8145]">
          Growsistant Series 1.0
        </h2>

        <div className="flex gap-6 items-center">
          {/* LEFT IMAGE */}
          <Image
            src={images[0]}
            width={140}
            height={140}
            alt="Side"
            className="cursor-pointer opacity-80 hover:scale-110 transition-transform"
            onClick={rotateRight}
          />

          {/* CENTER IMAGE */}
          <Image
            src={images[1]}
            width={260}
            height={260}
            alt="Main"
            className="transition-transform"
          />

          {/* RIGHT IMAGE */}
          <Image
            src={images[2]}
            width={140}
            height={140}
            alt="Side"
            className="cursor-pointer opacity-80 hover:scale-110 transition-transform"
            onClick={rotateLeft}
          />
        </div>

        <span className="text-gray-400 line-through">Rp 299.000</span>
        <h1 className="text-lg font-semibold text-black mt-1">Rp239.999</h1>

        <button className="inline-block px-8 py-2 rounded-full border border-[#6C8145] text-[#566738] hover:bg-[#6C8145] hover:text-white transition">
            Pre-Order
        </button>
      </section>

      <section className="w-full bg-white px-10 py-16 flex justify-center">
            <div className="w-full max-w-6xl bg-white shadow-md rounded-3xl p-10 flex gap-10">
              
              {/* LEFT SIDE */}
              <div className="flex-1 space-y-3">
                <h2 className="text-3xl font-semibold text-black">Contact Us</h2>

                <p className="text-gray-500">
                  We'll show you self-help options first. Additional help is available
                  if you need it, including live chat with our specialist.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  
                  {/* Card 1 */}
                  <div className="p-4 bg-white rounded-xl border">
                    <Image
                        src="/instagram.png"
                        alt="Growsistant Product"
                        width={30}
                        height={50}
                        className="object-contain"
                    />
                    {/* <div className="text-blue-500 text-3xl mb-2">📄</div> */}
                    <h3 className="py-1 font-semibold text-gray-400">Instagram</h3>
                    <a href="#" className="text-sm text-blue-500 underline">
                      growsistant
                    </a>
                  </div>

                  {/* Card 2 */}
                  <div className="p-4 bg-white rounded-xl border">
                    <div className="text-purple-500 text-3xl mb-2">📩</div>
                    <h3 className="py-1 font-semibold text-gray-400">Our Email</h3>
                    <p className="text-sm text-gray-600"></p>
                  </div>

                  {/* Card 3 */}
                  <div className="p-4 bg-gray-50 rounded-xl border">
                    <div className="text-blue-400 text-3xl mb-2">📞</div>
                    <h3 className="py-1 font-semibold text-gray-400">Phone</h3>
                    <p className="text-sm text-gray-600">+61 749 530 742</p>
                  </div>

                  {/* Card 4 */}
                  <div className="p-4 bg-gray-50 rounded-xl border">
                    <div className="text-orange-400 text-3xl mb-2">📍</div>
                    <h3 className="py-1 font-semibold text-gray-400">Visit Us</h3>
                    <p className="text-sm text-gray-600">Binus University @Anggrek</p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE — FORM */}
              <form className="flex-1 bg-gray-50 p-8 rounded-2xl border space-y-5">
                
                <div>
                  <label className="py-1 font-medium text-black">Full Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 border rounded-lg text-black/50"
                  />
                </div>

                <div>
                  <label className="py-1 font-medium text-black">Number Telpon</label>
                  <input
                    type="email"
                    placeholder="Enter your number"
                    className="w-full p-3 border rounded-lg text-black/50"
                  />
                </div>

                <div>
                  <label className="py-1 font-medium text-black">About your inquiry</label>
                  <textarea 
                    placeholder="Enter your message"
                    className="w-full p-3 border rounded-lg text-black/50"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#5974FF] text-white font-medium hover:opacity-90 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>

    </div>
  );
}
