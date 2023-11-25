"use client";
import React from "react";
import Image from "next/image";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";

const Business = (image, name, company, description) => {
  return (
    <>
      <Navbar />
      <div className="max-w-[100vw] mx-auto bg-black">
        <div className="py-4 lg:py-0">
          <div className=" flex items-center justify-center lg:hidden">
            <button className="text-white bg-gray-600 px-16 py-1 rounded-2xl text-sm  ">
              Business
            </button>
            <button className="text-black  bg-white px-10 pl-5 py-1 rounded-2xl text-sm -ml-[35px] ">
              Entrepreneur
            </button>
          </div>
        </div>
        <div className="md:flex items-center hidden justify-between overflow-hidden">
          <div className="md:ml-[5vw]  ">
            <h2 className="text-white text-4xl md:text-5xl font-serif mb-5 md:mt-44">
              Simplified payments <br /> and invoice <br /> management in one{" "}
              <br /> place.
            </h2>
            <p className="text-white mb-8 font-sans text-lg ">
              Join thousands of businesses of all sizes - using <br />{" "}
              Gladefinance&apos;s accounts, payments, and expense <br />{" "}
              management solutionto manage and scale their <br />
              businesses
            </p>
            <div className="mb-10">
              <button className="text-white bg-blue-600 px-6 py-2 ">
                Get Started
              </button>
              <button className="text-white bg-slate-500 px-6 py-2 ml-4">
                Play Video
              </button>
            </div>
          </div>
          <div className="relative -mr-16  -mt-16">
            <Image
              src="/images/gladeheroimage.png"
              width={750}
              height={600}
              alt="gladeheroimage"
            />
            <Image
              className="absolute -right-8  top-1/4 "
              src="/images/gladephonehero.png"
              width={350}
              height={400}
              alt="phone hero"
            />
            <Image
              className="absolute top-1/2 "
              src="/images/gladecardimage.svg"
              width={200}
              height={200}
              alt="card image"
            />
          </div>
        </div>
        {/* Mobile View */}
        <div className="md:hidden flex flex-col mt-20 ">
          <div className="text-center mt text-3xl font-serif">
            <h2 className="text-white leading-10">
              Simplified payments <br /> and invoice <br /> management in one{" "}
              <br /> place.
            </h2>
            <p className="text-white mb-8 font-sans mt-4 text-base ">
              Join thousands of businesses of all sizes - using <br />{" "}
              Gladefinance&apos;s accounts, payments, and expense <br />{" "}
              management solutionto manage and scale their <br />
              businesses
            </p>
            <div className="mb-20 flex flex-col items-center gap-4 ">
              <button className="text-white font-sans text-xl rounded-lg bg-blue-600 px-20 py-2 ">
                Get Started
              </button>
              <button className="text-white font-sans text-xl rounded-lg bg-slate-500 px-[85px] py-2">
                Play Video
              </button>
            </div>
          </div>
          <div className="relative ">
            <Image
              src="/images/gladeheroimage.png"
              width={400}
              height={400}
              alt="glade image hero"
            />
            <Image
              className="absolute -right-8  top-1/4 "
              src="/images/gladephonehero.png"
              width={200}
              height={200}
              alt="gladephone hero"
            />
            <Image
              className="absolute top-1/2 "
              src="/images/gladecardimage.svg"
              width={200}
              height={200}
              alt="gladecardimage2"
            />
          </div>
        </div>
        {/* End of mobile view */}
        {/* Global Accounts  */}
        <div className="bg-blue-600  mt-44 mb-4 md:flex hidden items-center justify-between w-[80vw] rounded-3xl py-24 px-10 mx-32">
          <div className="text-white col-span-2 ">
            <h2 className="text-5xl">Global Accounts</h2>
            <p className="mt-4 text-lg font-extralight  ">
              Open a domestic or foreign currency business account <br /> in
              minutes and start receiving payments immediately{" "}
            </p>

            <p className="mt-8">Get Started</p>
          </div>

          <div>
            <Image
              src="/images/account_selection.svg"
              width={500}
              height={500}
              alt="account selection"
            />
          </div>
        </div>
        <div className="bg-blue-600 mt-44 mb-4 flex flex-col md:hidden items-center justify-between rounded-3xl mx-6">
          <div className="text-white col-span-2 ">
            <h2 className="text-3xl text-center mt-4">Global Accounts</h2>
            <p className="mt-4 text-sm text-center px-8 font-extralight  ">
              Open a domestic or foreign currency business account in minutes
              and start receiving payments immediately{" "}
            </p>

            <p className="mt-4 text-center mb-12">Get Started</p>
          </div>

          <div>
            <Image
              src="/images/account_selection.svg"
              width={500}
              height={500}
              alt="account selectionn"
            />
          </div>
        </div>
        {/* End of Global Accounts  */}
        {/* Transfer and FX  */}
        <div className="bg-white mt-20 mb-10 md:flex hidden items-center justify-between w-[80vw] rounded-3xl py-20 px-20 mx-32">
          <div>
            <Image
              src="/images/send.svg"
              width={500}
              height={500}
              alt="send image"
            />
          </div>
          <div className="text-black col-span-2 ">
            <h2 className="text-4xl">Transfers and FX</h2>
            <p className="mt-4 text-lg font-extralight  ">
              Make domestic and international payments to <br /> your suppliers
              and vendors with low fees and <br /> great exchange rates
            </p>

            <p className="mt-8">Get Started</p>
          </div>
        </div>
        <div className="bg-white mt-20 mb-10 flex flex-col md:hidden mx-6 rounded-3xl ">
          <div className="text-black col-span-2 ">
            <h2 className="text-3xl text-center mt-4">
              Transfers and <br /> FX
            </h2>
            <p className=" mt-4 text-sm text-center px-8 font-extralight  ">
              Make domestic and international payments to <br /> your suppliers
              and vendors with low <br /> fees and <br /> great exchange rates
            </p>

            <p className="mt-8 text-center mb-20">Get Started</p>
          </div>
          <div className="mx-10">
            <Image
              src="/images/send.svg"
              width={300}
              height={300}
              alt="senddd"
            />
          </div>
        </div>
        {/* End of transfer and FX  */}
        {/* Borderless Cards  */}
        <div className=" w-[80vw] md:grid hidden grid-cols-2 gap-20 mx-32">
          <div className="bg-[#FF6F00] rounded-3xl py-16 px-12 w-[40vw]">
            <h2 className="text-white text-4xl font-bold font-serif">
              Borderless cards: The <br /> way to pay in the <br /> global
              economy.
            </h2>
            <p className="text-white font-thin mt-5 mb-10 ">
              Create a virtual card to manage one-time or recurring payments
              with or specific vendors or subscriptions. This can help you track
              spending and ensure that your team only spends money on approved
              items
            </p>
            <p className="text-white">Get Started</p>
          </div>
          <div className="bg-[#292929] flex items-center justify-center rounded-3xl">
            <Image
              className="mt-4"
              src="/images/glade-card (1)2.svg"
              width={300}
              height={300}
              alt="glade-card"
            />
          </div>
        </div>
        <div className="grid md:hidden mx-6">
          <div className="bg-[#FF6F00] rounded-2xl  ">
            <h2 className="text-white text-center mt-4 text-3xl font-bold font-serif">
              Borderless cards: <br /> The way to pay in <br /> the global
              economy.
            </h2>
            <p className="text-white text-sm text-center font-thin mt-5 mb-10 px-6 ">
              Create a virtual card to manage one- <br />
              time or recurring payments with or specific vendors or
              subscriptions. This can help you track spending and ensure that
              your team only spends money on approved items
            </p>
            <p className="text-white text-center">Get Started</p>
          </div>
          <div className="bg-[#292929] flex items-center mt-5 justify-center rounded-3xl py-6">
            <Image
              className="mt-4"
              src="/images/glade-card (1)2.svg"
              width={300}
              height={100}
              alt="gladeeee"
            />
          </div>
        </div>
        {/* End of Borderless cards  */}
        {/* Affordable Accessible Capital  */}
        <div className="md:grid hidden grid-cols-2 gap-4 mt-16 bg-[#2C6DEA] justify-between w-[80vw] rounded-3xl py-20 px-20 mx-32">
          <div className="mt-10">
            <Image
              src="/images/loan_officers.svg"
              width={400}
              height={400}
              alt="loan officers"
            />
          </div>
          <div>
            <h2 className="text-white text-4xl font-bold font-serif">
              Affordable and <br /> accessible capital for <br /> businesses of
              all <br />
              sizes.
            </h2>
            <p className="text-white mt-4">
              Get the capital you need to grow your business with our
              collateral-free loans. We offer competitive interest rates and no
              guarantors required. You can get approved within 24 hours, so you
              can start growing your business sooner.
            </p>
            <p
              className="mt-16
             text-white"
            >
              Get Started
            </p>
          </div>
        </div>
        <div className="grid md:hidden gap-4 mt-16 bg-[#2C6DEA] justify-between rounded-3xl mx-6">
          <div>
            <h2 className="text-white text-center text-3xl mt-4 font-bold font-serif">
              Affordable and <br /> accessible <br /> capital for <br />{" "}
              businesses of <br />
              all sizes.
            </h2>
            <p className="text-white mt-4 px-6 text-center">
              Get the capital you need to grow your business with our
              collateral-free loans. We offer competitive interest rates and no
              guarantors required. You can get approved within 24 hours, so you
              can start growing your business sooner.
            </p>
            <p
              className="mt-16
             text-white text-center"
            >
              Get Started
            </p>
          </div>
          <div className="mt-10 mx-auto rounded-3xl">
            <Image
              src="/images/loan_officers.svg"
              width={300}
              height={400}
              alt="loan officers2"
            />
          </div>
        </div>
        {/*  End of Affordable Accessible Capital  */}
        {/* Take control of your business  */}
        <div className="bg-white mt-16 mb-4 md:flex hidden  items-center justify-between w-[80vw] rounded-3xl py-4 px-10 mx-32">
          <div className="text-black col-span-2 ">
            <h2 className="text-5xl font-serif">
              Take control of your business expenses.
            </h2>
            <p className="mt-4 text-lg font-extralight  ">
              Stay on top of your company expenses with budgets, <br /> spend
              limits, employee cards, and reconciliation.
            </p>

            <p className="mt-8">Get Started</p>
          </div>

          <div className="mt-28">
            <Image
              src="/images/expense_management-new.svg"
              width={800}
              height={800}
              alt="expense manage"
            />
          </div>
        </div>
        <div className="bg-white mt-16 mb-4 flex flex-col md:hidden items-center justify-between rounded-3xl mx-6">
          <div className="text-black col-span-2 mt-4">
            <h2 className="text-4xl text-center  font-serif">
              Take control of <br /> your business <br /> expenses.
            </h2>
            <p className="mt-4 text-sm font-extralight text-center px-10 ">
              Stay on top of your company expenses with budgets, spend limits,
              employee cards, and reconciliation.
            </p>

            <p className="mt-8 text-center ">Get Started</p>
          </div>

          <div className="mt-24">
            <Image
              src="/images/expense_management-new.svg"
              width={800}
              height={800}
              alt="expense management"
            />
          </div>
        </div>
        {/* End of Take control of your business  */}
        {/* Accept Payment quickly  */}
        <div className=" w-[80vw] md:grid hidden grid-cols-2 gap-20 mx-32 mt-16">
          <div className="bg-[#FF6F00] rounded-3xl py-16 px-12 w-[40vw]">
            <h2 className="text-white text-5xl font-bold font-serif">
              Accept payments <br /> quickly and easily <br /> with our POS{" "}
              <br /> terminals.
            </h2>
            <p className="text-white text-lg font-thin mt-5 mb-10 ">
              Our Android 2-in-1 POS terminal is the perfect <br /> way to
              simplify your in-store payment collection <br /> and instantly
              receive payment into your <br /> account.
            </p>
            <p className="text-white">Get Started</p>
          </div>
          <div className="bg-[#292929] flex items-center justify-center rounded-3xl h-[82vh]">
            <Image
              className="mt-2"
              src="/images/posScreen.svg"
              width={300}
              height={300}
              alt="pos"
            />
          </div>
        </div>
        <div className=" grid md:hidden mt-16 mx-6">
          <div className="bg-[#FF6F00] rounded-3xl mb-10 ">
            <h2 className="text-white text-center text-3xl font-bold mt-4 font-serif">
              Accept <br /> payments <br /> quickly and <br /> easily with our{" "}
              <br /> POS terminals.
            </h2>
            <p className="text-white text-sm text-center  font-thin mt-5 mb-10 ">
              Our Android 2-in-1 POS terminal is the <br /> perfect way to
              simplify your in-store <br /> payment collection and instantly
              receive <br /> payment into your account.
            </p>
            <p className="text-white mb-14 text-center">Get Started</p>
          </div>
          <div className="bg-[#292929] flex items-center justify-center rounded-3xl h-[82vh]">
            <Image
              className="mt-2"
              src="/images/posScreen.svg"
              width={300}
              height={300}
              alt="pos screen"
            />
          </div>
        </div>
        {/* End of accept payment quickly  */}
        {/* Improve your cash flow  */}
        <div className="md:grid hidden  grid-cols-2 gap-4 mt-4 bg-[#2C6DEA] justify-between w-[80vw] rounded-3xl py-10 pb-2 px-20 mx-32">
          <div className="">
            <Image
              src="/images/invoice.svg"
              width={400}
              height={300}
              alt="invoice"
            />
          </div>
          <div className="mt-8">
            <h2 className="text-white  text-[45px] leading-[45px] font-bold font-serif">
              Improve your cash <br /> flow with smarter <br /> invoicing
            </h2>
            <p className="text-white mt-4">
              Our invoicing features makes it easy to create professional,
              tax-compliant invoices. With our pre-integrated payment options,
              your clients can immediately pay online or via bank transfer in a
              few clicks.
            </p>
            <p
              className="mt-16
             text-white"
            >
              Get Started
            </p>
          </div>
        </div>
        <div className="grid md:hidden bg-[#2C6DEA] justify-between mt-20 mx-6 rounded-3xl">
          <div className="mt-8">
            <h2 className="text-white text-center  text-3xl leading-[45px] font-bold font-serif">
              Improve your <br /> cash flow with <br /> smarter <br /> invoicing
            </h2>
            <p className="text-white text-center px-10 mt-4">
              Our invoicing features makes it easy to create professional,
              tax-compliant invoices. With our pre-integrated payment options,
              your clients can immediately pay online or via bank transfer in a
              few clicks.
            </p>
            <p
              className="mt-16
             text-white text-center"
            >
              Get Started
            </p>
          </div>
          <div className="px-10">
            <Image
              src="/images/invoice.svg"
              width={400}
              height={300}
              alt="invoice svg"
            />
          </div>
        </div>
        {/* End of Improve your cash flow  */}

        {/* Payroll easy to use  */}

        <div className="bg-[#FF6F00] mt-16 mb-4 md:flex hidden items-center justify-between w-[80vw] rounded-3xl py-4 px-10 mx-32">
          <div className="text-white col-span-2 ">
            <h2 className="text-5xl font-serif">
              Payroll that&apos;s easy to use
            </h2>
            <p className="mt-4 text-lg font-extralight  ">
              The simplest way to pay your people. Give your <br /> employees
              early access to their earned salary with Gladefinance Payroll
              Access.
            </p>

            <p className="mt-8">Get Started</p>
          </div>

          <div className="">
            <Image
              src="/images/payroll_team.svg"
              width={800}
              height={800}
              alt="payroll"
            />
          </div>
        </div>

        <div className="bg-[#FF6F00] mt-16 mb-4 flex flex-col md:hidden mx-6 items-center justify-between  rounded-3xl">
          <div className="text-white col-span-2 mt-4">
            <h2 className="text-4xl text-center leading-10 font-semibold font-serif">
              Payroll that&apos;s <br /> easy to use
            </h2>
            <p className="mt-4 text-sm text-center leading-6 font-extralight  ">
              The simplest way to pay your people. <br /> Give your employees
              early access to <br /> their earned salary with Gladefinance{" "}
              <br /> Payroll Access.
            </p>

            <p className="mt-8 text-center">Get Started</p>
          </div>

          <div className="px-6 ">
            <Image
              src="/images/payroll_team.svg"
              width={400}
              height={400}
              alt="payroll team"
            />
          </div>
        </div>

        {/* End of Payroll easy to use  */}

        {/* Glade checkout  */}

        <div className="md:grid hidden grid-cols-2 gap-4 mt-20 bg-white  justify-between w-[80vw] rounded-3xl py-16  px-20 mx-32">
          <div className="mt-12">
            <Image
              src="/images/checkout_6.png"
              width={400}
              height={300}
              alt="checkout"
            />
          </div>
          <div className="">
            <h2 className="text-black   text-[45px] leading-[45px] font-bold font-serif">
              Gladefinance Checkout
            </h2>
            <p className="text-black mt-4">
              With Gladefinance Checkout, you can accept payments from clients
              all over the world, using a variety of payment methods. You can
              also create beautiful, branded payment requests, and share them
              with your clients with just a few clicks.
            </p>
            <div></div>
            <p
              className="mt-16
             text-black"
            >
              Get Started
            </p>
          </div>
        </div>
        <div className="grid md:hidden gap-4 mt-20 bg-white mx-6  justify-between rounded-3xl">
          <div className="mt-4">
            <h2 className="text-black text-3xl text-center leading-[45px] font-bold font-serif">
              Gladefinance Checkout
            </h2>
            <p className="text-black text-sm text-center px-8 mt-4">
              With Gladefinance Checkout, you can accept payments from clients
              all over the world, using a variety of payment methods. You can
              also create beautiful, branded payment requests, and share them
              with your clients with just a few clicks.
            </p>
            <div></div>
            <p
              className="mt-16
             text-black text-center"
            >
              Get Started
            </p>
          </div>
          <div className="mt-12 px-10">
            <Image
              src="/images/checkout_6.png"
              width={300}
              height={300}
              alt="checkouttt"
            />
          </div>
        </div>

        {/* End of glade checkout  */}

        <div className="flex flex-col mt-48">
          <div className="flex flex-col text-white items-center justify-center">
            <h2 className="md:text-6xl text-3xl text-center px-6 md:px-0  font-serif">
              Don&apos;t take our word for it
            </h2>
            <p className="md:text-2xl text-xs px-8 md:px-0 text-center font-serif">
              Read what other business owners say about our product
            </p>
          </div>

          <div className="md:flex hidden max-w-[40vw] mx-auto items-center justify-center gap-6">
            <Testimonials
              image={
                <Image
                  src="/images/testimonial-1.svg"
                  width={70}
                  height={70}
                  alt="testimonial one"
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
                  alt="testimonial two"
                />
              }
              name={"AbdulHameed Yunusa"}
              company={"Digiverz"}
              description={
                "“My favorite things about Gladefinance have to be the fact that there are no pesky hidden charges, it takes about 10 minutes to get a business account, and the customer service is lightning fast! You don’t know how much you need Gladefinance until you use the services.”"
              }
            />
          </div>
          <div className="flex md:hidden  items-center justify-center gap-6">
            <Testimonials
              image={
                <Image
                  src="/images/testimonial-1.svg"
                  width={70}
                  height={70}
                  alt="testimonial two"
                />
              }
              name={"Abel Adugam Nibori Ogbonna"}
              company={"Versuspay"}
              description={
                "“When it comes to handling payments, Gladefinance has always been on its feet to ensure the process is seamless, and whenever we encounter minor issues, the support team is swift in resolving them. Speed and seamless experience are what we love about Gladefinance.”"
              }
            />
          </div>
        </div>
        <div className="mt-44 flex flex-col items-center justify-center  ">
          <h2 className="text-white text-center md:text-5xl text-3xl px-8 md:px-0 font-serif ">
            Join thousands of business owners <br /> using our products to scale
            their <br /> businesses
          </h2>
          <button className="bg-[#2C6DEA] px-7 py-2 mt-10 rounded-lg mb-24 text-white font-sans ">
            Open an Account
          </button>
        </div>
      </div>
    </>
  );
};

export default Business;

