"use client";

import Image from "next/image";
import { useState } from "react";
import Link from 'next/link';
import RoundedButton from "@/components/RoundedButton";
import { useTailwindBreakpoint } from "@/components/hooks/Breakpoint";
import Navbar from "@/components/Navbar";
import { PlantImages } from "@/components/interface/Types";
import { motion } from "framer-motion";
import { WordsPullUp } from "@/components/ui/WordsPullUp";
import { FaInstagram, FaLocationDot, FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { RiDiscountPercentLine } from "react-icons/ri";
import { MdDiscount } from "react-icons/md";
import { handleScrollTo } from "./functions/navigation";

export default function Home() {
  const [images, setImages] = useState([
    "/side_view_1.webp",
    "/front_view_no_sprinkler.webp",
    "/front_view_sprinkler.webp",
  ]);

  const rotateLeft = () => {
    const first = images.shift()!;
    setImages([...images, first]);
  };

  const onPreOrderClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfxNhb47WetWSZ16RJKqGZ3mZL3MYd7AGzQ9eWp_fvbjywdVA/viewform", "_blank");
  }

  const rotateRight = () => {
    const last = images.pop()!;
    setImages([last, ...images]);
  };

  const { breakpoint, orientation } = useTailwindBreakpoint();

  const cactusImages: PlantImages = [
    { path: "/plants/cactus/cactus1.webp", name: "Cylindropuntia", alias: "Cholla Cactus", price: 5000 },
    { path: "/plants/cactus/cactus2.webp", name: "Echinocactus Grusonii", alias: "Golden Barrel", price: 5000 },
    { path: "/plants/cactus/cactus3.webp", name: "Cereus Teragonus", alias: "Fairy Castle Cactus", price: 5000 },
    { path: "/plants/cactus/cactus4.webp", name: "Echeveria", price: 5000 },
    { path: "/plants/cactus/cactus5.webp", name: "Opuntia microdasys", alias: "Bunny Ear Cactus", price: 5000 },
    { path: "/plants/cactus/cactus6.webp", name: "Graptoveria", price: 5000 },
    { path: "/plants/cactus/cactus7.webp", name: "Echinopsis", price: 5000 },
    { path: "/plants/cactus/cactus8.webp", name: "Crassula Perforata", price: 5000 },
    { path: "/plants/cactus/cactus9.webp", name: "String of Ruby", price: 5000 },
  ];

  return (
    <div className="min-h-screen bg-background font-primary overflow-x-hidden p-10">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="flex w-full h-screen items-center overflow-hidden rounded-b-[60px]" id="home">
        <Image
          src="/landing_page_bg.webp"
          alt="Hero Image"
          fill
          className="object-cover fade-mask"
          style={{ opacity: 0.7 }}
          priority
        />
        <div className="relative z-0 max-w-[800px] landscape:ml-50 portrait:items-center portrait:justify-center flex flex-col gap-15">
          <Image src="/logo_full_dark.webp" alt="Growsistant Logo" width={orientation === 'portrait' ? 300 : 500} height={0} />
          <WordsPullUp text="Your NEXT Smart Indoor Garden" className="bg-dgreen/50 p-2 xl:p-3 text-white" />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-dgreen font-semibold text-2xl portrait:text-center"
          >
            Designed for modern living, powered by smart growing technology
          </motion.div>
        </div>
      </section>




      {/* ABOUT SECTION */}
      <section className="w-full flex portrait:flex-col landscape:flex-row items-center justify-center xl:gap-50 md:gap-20 landscape:px-24 py-16">
        {/* LEFT CONTENT */}
        <div className="max-w-xl space-y-4 portrait:items-center portrait:text-center">
          <h2 className="text-3xl landscape:text-4xl font-medium landscape:tracking-[0.2em] portrait:tracking-[0.2em] whitespace-nowrap text-black">
            Get To Know Our
          </h2>

          <Image src="/logo_full.webp" alt="Growsistant Logo" width={500} height={0} />

          <p className="text-black leading-relaxed text-lg portrait:mb-10">
            It is a <strong>mini smart garden</strong> that automatically takes care of your plants. Perfect for apartments, boarding houses, and busy urban lifestyles.
          </p>

          <RoundedButton onClick={() => handleScrollTo("#products")} text="Explore" />
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image
            src="/front_view_sprinkler.webp"
            alt="Growsistant Product"
            width={330}
            height={0}
            className="object-contain"
          />
        </motion.div>
      </section>



      {/* CAROUSEL SECTION */}
      <section className="flex flex-col items-center portrait:text-center" id="products">
        <h2 className="text-4xl font-normal tracking-[0.2em] text-dgreen">
          Growsistant Series 1.0
        </h2>

        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* LEFT IMAGE */}
          <div className="flex items-center justify-center landscape:gap-6 min-h-[400px]">
            <Image
              src={images[0]}
              width={orientation === 'portrait' ? 110 : 140}
              height={0}
              alt="Side"
              className="cursor-pointer opacity-80 hover:scale-110 transition-transform"
              onClick={rotateRight}
            />

            {/* CENTER IMAGE */}
            <Image
              src={images[1]}
              width={orientation === 'portrait' ? 180 : 260}
              height={0}
              alt="Main"
              className="transition-transform cursor-pointer"
            />

            {/* RIGHT IMAGE */}
            <Image
              src={images[2]}
              width={orientation === 'portrait' ? 110 : 140}
              height={140}
              alt="Side"
              className="cursor-pointer opacity-80 hover:scale-110 transition-transform"
              onClick={rotateLeft}
            />
          </div>
          <div className="flex items-center justify-center landscape:gap-20 portrait:gap-10 text-gray-500">
            <div className="flex flex-col items-center">
              <div>Dimensions</div>
              <strong>11 x 11 x 35cm</strong>
            </div>
            <div className="flex flex-col items-center">
              <div>Power Consumption</div>
              <strong>~12W Typical</strong>
            </div>
            <div className="flex flex-col items-center">
              <div>Material</div>
              <strong>Plastic</strong>
            </div>
          </div>
        </motion.div>

        {/* PRICING */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center mt-10"
        >
          <div className="flex gap-3 mb-3 text-xl items-center justify-center">
            <MdDiscount />
            <div>Limited November Offer</div>
          </div>
          <div className="text-gray-400 line-through text-3xl">Rp 300.000</div>
          <h1 className="text-3xl font-semibold text-black mt-1 mb-5">Rp 248.900</h1>

          {/* <button onClick= className="inline-block px-8 py-2 cursor-pointer rounded-full border border-dgreen text-dgreen hover:bg-lgreen hover:border-lgreen hover:text-white transition">
            Pre-Order
          </button> */}
          <RoundedButton onClick={onPreOrderClick} text="Pre-order & Save 17%" />
        </motion.div>
      </section>

      {/* PLANT COLLECTION SECTION */}

      <section className="w-full flex flex-col items-center mt-20 portrait:text-center" id="plants">
        <h2 className="text-4xl font-normal tracking-[0.2em] text-secondary mb-10">
          Our Plant Collections
        </h2>
        <div className="grid landscape:grid-cols-3 portrait:grid-cols-1 gap-10 max-w-6xl">
          {cactusImages.map((plant, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white rounded-2xl border p-5 shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={plant.path}
                alt={plant.name}
                width={200}
                height={0}
                className="object-contain rounded-lg"
              />
              <h3 className="text-xl font-semibold text-black mt-4">{plant.name}</h3>
              {plant.alias && <p className="text-gray-500 italic">{plant.alias}</p>}
              {plant.price && <p className="text-lg font-medium text-dgreen mt-2">Rp {plant.price.toLocaleString('id-ID')}</p>}
            </motion.div>
          ))}
        </div>

      </section>

      {/* CONTACT SECTION */}

      <section className="w-full flex portrait:flex-col justify-center mt-20" id="contact">
        <div className="w-full max-w-6xl shadow-md rounded-3xl landscape:p-10 portrait:p-5 flex portrait:flex-col gap-10">

          {/* LEFT SIDE */}
          <div className="flex-1 space-y-3">
            <h2 className="text-3xl font-semibold text-black portrait:text-center">Contact Us</h2>

            <p className="text-gray-500 portrait:text-center">
              {"We'll show you self-help options first. Additional help is available if you need it, including live chat with our specialist."}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">

              {/* Card 1 */}
              <div className="p-4 bg-white rounded-xl border flex flex-col min-h-[130px]">
                <FaInstagram className="text-2xl mb-auto" />
                {/* <div className="text-blue-500 text-3xl mb-2">📄</div> */}
                <h3 className="py-1 font-semibold text-gray-500">Instagram</h3>
                <a href="https://www.instagram.com/growsistant" target="_blank" className="text-sm text-blue-500 hover:opacity-50 transition">
                  {"@growsistant"}
                </a>
              </div>

              {/* Card 2 */}
              <div className="p-4 bg-white rounded-xl border flex flex-col min-h-[130px]">
                <SiGmail className="text-2xl mb-auto" />
                <h3 className="py-1 font-semibold text-gray-500">Our Email</h3>
                <p className="text-sm text-gray-600">TBA</p>
              </div>

              {/* Card 3 */}
              <div className="p-4 bg-gray-50 rounded-xl border flex flex-col min-h-[130px]">
                <FaPhone className="text-2xl mb-auto" />
                <h3 className="py-1 font-semibold text-gray-500">Phone</h3>
                <p className="text-sm text-gray-600">+61 749 530 742</p>
              </div>

              {/* Card 4 */}
              <div className="p-4 bg-gray-50 rounded-xl border flex flex-col min-h-[130px]">
                <FaLocationDot className="text-2xl mb-auto" />
                <h3 className="py-1 font-semibold text-gray-500">Visit Us</h3>
                <a href="https://maps.app.goo.gl/k1kYUG8ySJ4wsp1H9" target="_blank" className="text-sm text-blue-500 hover:opacity-50 transition">Binus University @Anggrek</a>
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
              <label className="py-1 font-medium text-black">Phone Number</label>
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
              className="w-full py-3 rounded-lg bg-dgreen cursor-pointer text-white font-medium hover:opacity-90 transition"
              onClick={() => {
                alert("This feature is still under development. Sorry for your inconvenience")
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
