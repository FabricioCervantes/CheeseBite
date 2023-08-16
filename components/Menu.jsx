import React from "react";
import Image from "next/image";
import BurgerCard from "./BurgerCard";

const Menu = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 p-5 mt-20 max-w-7xl gap-5">
          <div className="grid md:grid-cols-2 gap-5">
            <Image
              src="/assets/hero.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "full",
                objectFit: "cover",
                opacity: "0.90",
                // make darker
                filter: "brightness(0.5)",
              }} // optional
              alt="main image"
            ></Image>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-4xl font-bold">Types of Burger</h2>
              <p className="mt-5 text-center text-slate-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam,
                perferendis eos dolores
              </p>
              {/* call to action button */}
              <button className="bg-yellow-600 text-white px-10 py-3 rounded-full my-10">
                Order Now
              </button>
            </div>
          </div>
          <div>
            <BurgerCard />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <div className="max-w-7xl">
          <h1 className="text-center text-6xl font-bold">
            UNLEASH YOUR BURGER CRAVINGS WITH OUR MENU
          </h1>
          <div className="grid md:grid-cols-4 mt-10 gap-10">
            <div>
              <Image
                src="/assets/hero.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "full",
                  objectFit: "cover",
                  opacity: "0.90",
                  // make darker
                  filter: "brightness(0.5)",
                }} // optional
                alt="main image"
              ></Image>
              <div className="mt-2 text-center">
                <p>Chicken Burger</p>
                <p>$165.00</p>
              </div>
            </div>
            <div>
              <Image
                src="/assets/hero.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "full",
                  objectFit: "cover",
                  opacity: "0.90",
                  // make darker
                  filter: "brightness(0.5)",
                }} // optional
                alt="main image"
              ></Image>
              <div className="mt-2 text-center">
                <p>Chicken Burger</p>
                <p>$165.00</p>
              </div>
            </div>
            <div>
              <Image
                src="/assets/hero.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "full",
                  objectFit: "cover",
                  opacity: "0.90",
                  // make darker
                  filter: "brightness(0.5)",
                }} // optional
                alt="main image"
              ></Image>
              <div className="mt-2 text-center">
                <p>Chicken Burger</p>
                <p>$165.00</p>
              </div>
            </div>
            <div>
              <Image
                src="/assets/hero.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "full",
                  objectFit: "cover",
                  opacity: "0.90",
                  // make darker
                  filter: "brightness(0.5)",
                }} // optional
                alt="main image"
              ></Image>
              <div className="mt-2 text-center">
                <p>Chicken Burger</p>
                <p>$165.00</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-yellow-600 text-white px-10 py-3 rounded-full my-10">
              View More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
