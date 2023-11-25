"use client"
import React from 'react'
import Link from 'next/link';
import { GrLinkedin } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="text-white bg-black pb-14 md:flex hidden flex-col items-center justify-center mx-auto ">
        <div className="border-white border-t-2 w-[90vw] mx-auto "></div>
        <div className=" flex mt-12">
          <div className="px-8">
            <h3 className="text-sm font-bold">United Kingdom</h3>
            <p className="mt-4 text-sm font-thin leading-loose">
              307 Euston Road London, <br />{" "}
              <span className="font-bold text-sm">
                NW1 3AD, United Kingdom.
              </span>
            </p>
            <p className="text-sm font-bold mt-12">United States</p>
            <p className="text-sm leading-loose">
              Suite 206 Middletown, <br />{" "}
              <span className="font-bold">
                {" "}
                19709 New Castle, Delaware, US.
              </span>{" "}
            </p>
            <p className="text-sm font-bold mt-12">Nigeria</p>
            <p className="text-sm leading-loose">
              9b Ike Asogwa, <br />{" "}
              <span className="font-bold"> Maryland, Lagos, Nigeria.</span>{" "}
            </p>
          </div>

          <div className="px-8">
            <h3 className="text-sm font-bold mb-4">Features</h3>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Company Creation
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Accounts
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Payments
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Cards
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Expense Management
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Cashflow
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Invoicing
              </p>
            </Link>
            <Link href="#">
              <p className="text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Checkout
              </p>
            </Link>
          </div>

          <div className="px-8">
            <h3 className="text-sm font-bold mb-4">Company</h3>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Terms
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Privacy Policy
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Brand
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm flex-wrap hover:text-[#2C6DEA] hover:transition duration-500">
                Partner with us
              </p>
            </Link>
          </div>

          <div className="px-8">
            <h3 className="text-sm font-bold mb-4">Resources</h3>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                FAQs
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Blog
              </p>
            </Link>
          </div>
          <div className="px-8">
            <h3 className="text-sm font-bold mb-4">Developers</h3>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                API Documentation
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                API Reference
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Slack Community
              </p>
            </Link>
          </div>
          <div className="px-8">
            <h3 className="text-sm font-bold mb-4">Contact</h3>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                support@gladefinance.co
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                +234 916 236 8057
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                +234 012 299 797
              </p>
            </Link>
            <div className="flex gap-3 px-2">
              <GrLinkedin className="h-5 w-5" />
              <ImFacebook2 className="h-5 w-5" />
              <FaInstagramSquare className="h-5 w-5" />
              <FaTwitterSquare className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Start of mobile footer  */}
      <div className="text-white bg-black pb-14 flex md:hidden flex-col items-center justify-center  ">
        <div className=" grid grid-cols-2 mt-12">
          <div className="px-8">
            <h3 className="text-sm font-bold mb-4">Features</h3>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Company Creation
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Accounts
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Payments
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Cards
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-xs hover:text-[#2C6DEA] hover:transition duration-500">
                Expense Management
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Cashflow
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Invoicing
              </p>
            </Link>
            <Link href="#">
              <p className="text-sm  hover:text-[#2C6DEA] hover:transition duration-500">
                Checkout
              </p>
            </Link>
          </div>

          <div className="px-8">
            <h3 className="text-sm font-bold mb-4">Company</h3>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Terms
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Privacy Policy
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Brand
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm flex-wrap hover:text-[#2C6DEA] hover:transition duration-500">
                Partner with us
              </p>
            </Link>
          </div>

          <div className="px-8 mt-8">
            <h3 className="text-sm font-bold mb-4">Resources</h3>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                FAQs
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Blog
              </p>
            </Link>
          </div>
          <div className="px-8 mt-8">
            <h3 className="text-sm font-bold mb-4">Developers</h3>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                API Documentation
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                API Reference
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                Slack Community
              </p>
            </Link>
          </div>
          <div className="px-8">
            <h3 className="text-sm font-bold mb-4">Contact</h3>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                support@gladefinance.co
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                +234 916 236 8057
              </p>
            </Link>
            <Link href="#">
              <p className="pb-5 text-sm hover:text-[#2C6DEA] hover:transition duration-500">
                +234 012 299 797
              </p>
            </Link>
            <div className="flex gap-3 px-2">
              <GrLinkedin className="h-5 w-5" />
              <ImFacebook2 className="h-5 w-5" />
              <FaInstagramSquare className="h-5 w-5" />
              <FaTwitterSquare className="h-5 w-5" />
            </div>

            <div className="mt-20 w-[40vw]">
              <h3 className="text-sm font-bold">United Kingdom</h3>
              <p className="mt-4 text-sm font-thin leading-loose">
                307 Euston Road London, <br />{" "}
                <span className="font-bold text-sm">
                  NW1 3AD, United Kingdom.
                </span>
              </p>
              <p className="text-sm font-bold mt-12">United States</p>
              <p className="text-sm leading-loose">
                Suite 206 Middletown, <br />{" "}
                <span className="font-bold">
                  {" "}
                  19709 New Castle, Delaware, US.
                </span>{" "}
              </p>
              <p className="text-sm font-bold mt-12">Nigeria</p>
              <p className="text-sm leading-loose">
                9b Ike Asogwa, <br />{" "}
                <span className="font-bold"> Maryland, Lagos, Nigeria.</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* End of mobile footer  */}
      <div className=" text-white  bg-black pb-16">
        <div className="border-white border-t-2 w-[90vw] mx-auto "></div>
        <div className="md:flex hidden  items-center justify-between w-[90vw] mx-auto mt-10">
          <p className="w-[50vw]">
            Gladefinance is a financial technology company and not a bank.
            Banking services are <br /> provided by our partner banks, which are
            licensed banks. Cards are issued by our <br /> partner banks
            pursuant to license from Visa and MasterCard and may be used
            everywhere Visa and MasterCard debit cards are accepted.
          </p>
          <p className="-mt-20">© Gladefinance 2023. All Rights Reserved</p>
        </div>
      </div>

      {/* Start of Mobile copyright  */}
      <div className=" text-white bg-black pb-10 -mt-10">
        {/* <div className="border-white border-t-2 w-[90vw] mx-auto "></div> */}
        <div className="flex flex-col md:hidden items-center justify-between px-6 ">
          <p className="text-left">
            Gladefinance is a financial technology company and not a bank.
            Banking services are  provided by our partner banks, which are
            licensed banks. Cards are issued by our partner banks
            pursuant to license from Visa and MasterCard and may be used
            everywhere Visa and MasterCard debit cards are accepted.
          </p>
          <p className="mt-10 ">© Gladefinance 2023. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer