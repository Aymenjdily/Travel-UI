"use client"

import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"
import { container, item } from "@/utils/motion"

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link className="mb-10" href="/">
            <motion.div whileInView={{ opacity:100 }} initial={{ opacity:0 }} transition={{ duration:0.6 }}>
              <Image
                src="/hilink-logo.svg"
                alt="logo"
                width={74}
                height={29}
              />
            </motion.div>
          </Link>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {
              FOOTER_LINKS.map((columns) => (
                <FooterColumn title={columns.title}>
                  <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                    {columns.links.map((link) => (
                      <Link href="/" key={link}>
                        {link}
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              ))
            }
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link href="/" key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
                    <p className="whitespace-nowrap">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <motion.ul variants={container} whileInView="visible" initial="hidden" className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link href="" key={link}>
                      <motion.div variants={item}>
                        <Image src={link} alt="logo" width={24} height={24} />
                      </motion.div>
                    </Link>
                  ))}
                </motion.ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          &copy; 2023 Hilink | All rights reserved
        </p>
      </div>
    </footer>
  )
}

type FooterColumnsProps = {
  title: string;
  children: React.ReactNode
}

const FooterColumn = ({ title, children }: FooterColumnsProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer