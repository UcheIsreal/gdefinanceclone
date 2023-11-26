"use client";
import React from "react";
import WhiteNavbar from "../components/WhiteNavbar";
import Image from "next/image";
import Testimonials from "../components/Testimonials";
import Link from "next/link";

const Entrepreneur = (image, name, company, description) => {
  return (
    <>
      <WhiteNavbar />
      <div>
        <div className=" flex items-center justify-center lg:hidden">
          <Link href="/" className="text-white bg-gray-600 px-10 py-1 rounded-2xl text-sm  ">
            Business
          </Link>
          <button className="text-black  bg-white px-5 pl-5 py-1 rounded-2xl text-sm -ml-[35px] ">
            Entrepreneur
          </button>
        </div>
      </div>
      <div className="bg-[#EEF4FF]">
        {/* Manage personal finance  */}
        <div className=" md:flex hidden items-center justify-between w-[92vw] ml-[5.7rem] pt-5">
          <div className=" w-[45vw]">
            <h2 className="text-6xl leading-none font-light font-serif ">
              Manage your <br /> personal finances
            </h2>
            <p className="mt-6 font-sans text-lg">
              Fund your account, transfer funds, get cards to make online <br />
              payments, set budgets to control your spending, all from one
              place.
            </p>
            <button className="bg-[#2C6DEA] text-white px-10 py-3 mt-28 rounded-lg">
              Get Started
            </button>
          </div>

          <div className="">
            <Image
              src="/images/personal-account-section1.png"
              width={700}
              height={700}
              alt=""
            />
          </div>
        </div>
        {/* Manage personal finance mobile  */}
        <div className=" flex md:hidden flex-col pt-5">
          <div className="">
            <h2 className="text-3xl text-center leading-none  font-serif ">
              Manage your personal <br /> finances
            </h2>
            <p className="mt-6 font-sans text-center font-extralight leading-6 text-sm px-6">
              Fund your account, transfer funds, get cards to make online
              payments, set budgets to control your spending, all from one
              place.
            </p>
          </div>
          <div className="flex items-center justify-center mb-6 ">
            <button className="bg-[#2C6DEA]  text-white px-10 py-3 mt-20 rounded-lg">
              Get Started
            </button>
          </div>

          <div className="mx-10">
            <Image
              src="/images/personal-account-section1.png"
              width={400}
              height={400}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center mt-20 text-6xl font-serif font-light ">
            Keep your personal and business <br /> finances separate
          </h2>
          <button className="bg-[#2C6DEA] text-white px-10 py-3 mt-10 rounded-lg">
            Get Started
          </button>
        </div>
        <div className="bg-[#2C6DEA] flex items-center justify-between w-[80vw] mx-auto rounded-3xl px-24 py-20 mt-20 text-white">
          <div>
            <h2 className="text-5xl font-serif ">
              The personal account <br /> for entrepreneurs
            </h2>
            <p className="font-sans ">
              Open a personal account in one click to keep your business <br />{" "}
              and personal finance separate
            </p>
          </div>
          <div>
            <Image
              src="/images/personal-account-section3.svg"
              width={400}
              height={400}
              alt=""
            />
          </div>
        </div>
        <div className="bg-white flex items-center justify-between w-[80vw] mx-auto rounded-3xl px-24 py-20 mt-20 text-black">
          <div className="w-[25vw]">
            <Image
              src="/images/personal-account-section3.svg"
              width={400}
              height={400}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-6xl font-serif ">
              Send money to <br /> anyone for free.
            </h2>
            <p className="font-sans text-lg">
              Send money instantly, anytime and anywhere.
            </p>
          </div>
        </div>

        <div className="bg-[#292929] flex items-center justify-between w-[80vw] mx-auto rounded-3xl px-24 py-20 mt-20 text-white">
          <div className="w-[25vw]">
            <Image
              src="/images/virtual__card.svg"
              width={400}
              height={400}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-6xl font-serif ">Get a virtual card</h2>
            <p className="font-sans text-lg">
              Better than your bank! Shop securely online with our <br />{" "}
              virtual card. Create as many virtual cards for extra security.
            </p>
          </div>
        </div>

        <div className="bg-[#FF6F00] flex items-center justify-between w-[80vw] mx-auto rounded-3xl px-24 py-20 mt-20 text-white">
          <div>
            <h2 className="text-5xl font-serif ">
              Pay your bills quickly <br /> and easily with <br /> recurring
              payments.
            </h2>
            <p className="font-sans mt-3 ">
              Set up recurring bill payments and save time!
            </p>
          </div>
          <div>
            <Image
              src="/images/pay_bills_quickly.svg"
              width={400}
              height={400}
              alt=""
            />
          </div>
        </div>

        <div className="bg-[#2C6DEA] flex items-center justify-between w-[80vw] mx-auto rounded-3xl px-24 py-20 mt-20 text-white">
          <div className="mt-16">
            <Image
              src="/images/budget-limit.svg"
              width={350}
              height={350}
              alt=""
            />
          </div>
          <div className="">
            <h2 className="text-5xl font-serif ">
              Spend within your <br /> limits
            </h2>
            <p className="font-sans ">
              Make informed financial decisions with budgets, spend <br />{" "}
              limits, and analytics.{" "}
            </p>
          </div>
        </div>

        <div className="bg-white flex items-center justify-between w-[80vw] mx-auto rounded-3xl px-24 py-20 mt-20 text-black">
          <div className="">
            <h2 className="text-5xl font-serif ">
              Build wealth for the future
            </h2>
            <p className="font-sans ">
              Generate passive income with low-risk investments <br /> and reach
              your financial goals.
            </p>
          </div>
          <div className="mt-16">
            <Image
              src="/images/build_wealth.svg"
              width={350}
              height={350}
              alt=""
            />
          </div>
        </div>

        <div className="bg-[#292929] flex items-center justify-between w-[80vw] mx-auto rounded-3xl px-24 py-20 mt-20 text-white">
          <div className="">
            <Image
              src="/images/discount_request.svg"
              width={400}
              height={400}
              alt=""
            />
          </div>
          <div className="">
            <h2 className="text-5xl font-serif ">
              Get discounts & <br /> cashback everytime <br /> you spend.
            </h2>
            <p className="font-sans ">
              Earn points and cashback every time you pay your bills, <br />{" "}
              scan a QR code, or make online purshases using your <br />{" "}
              account.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-44">
          <h2 className="text-6xl tracking-tight font-serif">
            Don&apos;t take our word for it
          </h2>
          <p className="font-sans mt-3">
            Read what other business owners say about our product
          </p>
        </div>

        <div className="flex max-w-[40vw] mx-auto items-center justify-center gap-6 pb-32">
          <Testimonials
            image={
              <Image
                src="/images/testimonial-1.svg"
                width={70}
                height={70}
                alt=""
              />
            }
            name={"Abel Adugam Nibori Ogbonna"}
            company={"Versuspay"}
            description={
              "“When it comes to handling payments, Gladefinance has always been on its feet to ensure the process is seamless, and whenever we encounter minor issues, the support team is swift in resolving them. Speed and seamless experience are what we love about Gladefinance.”"
            }
          />
          <Testimonials
            image={
              <Image
                src="/images/testimonial-2.svg"
                width={70}
                height={70}
                alt=""
              />
            }
            name={"AbdulHameed Yunusa"}
            company={"Digiverz"}
            description={
              "“My favorite things about Gladefinance have to be the fact that there are no pesky hidden charges, it takes about 10 minutes to get a business account, and the customer service is lightning fast! You don’t know how much you need Gladefinance until you use the services.”"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Entrepreneur;
