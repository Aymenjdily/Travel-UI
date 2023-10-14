"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="hilink" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-semibold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <CustomButton
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <div className="inline-block cursor-pointer lg:hidden">
        <Menu>
          <Menu.Button>
            <Image
              src="/menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="inline-block cursor-pointer lg:hidden"
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 right-7 mt-2  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 p-5 focus:outline-none flex items-start justify-center flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Menu.Item key={link.key}>
                  {({ active }) => (
                    <Link
                      className={`${
                        active && "font-semibold"
                      } regular-16 text-gray-50 z-20 flexCenter cursor-pointer pb-1.5 transition-all hover:font-semibold`}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  )}
                </Menu.Item>
              ))}
              <Menu.Item disabled>
                <CustomButton
                  type="button"
                  title="Login"
                  icon="/user.svg"
                  variant="btn_dark_green"
                />
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
