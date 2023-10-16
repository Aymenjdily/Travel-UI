"use client"

import React from 'react'
import CustomButton from './shared/CustomButton'
import Image from 'next/image'
import { motion } from 'framer-motion'

const GetApp = () => {
  return (
    <section className='flexCenter w-full flex-col pb-[100px]'>
      <div className='get-app'>
        <motion.div whileInView={{ opacity:100 }} initial={{ opacity:0 }} transition={{ duration:0.6 }} className='z-20 flex w-full flex-1 flex-col items-start justify-center gap-12'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[320px]'>
            Get for free now!
          </h2>
          <p className='regular-16 text-gray-10'>
            Available on IOS and Android
          </p>
          <div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'>
            <CustomButton type="button" title="App Store" icon="/apple.svg" variant='btn_white' full />
            <CustomButton type="button" title="Play Store" icon="/android.svg" variant='btn_dark_green_outline' full />
          </div>
        </motion.div>
        <div className='flex flex-1 items-center justify-end'>
          <Image
            src="/phones.png"
            alt="phones"
            width={550}
            height={870}
          />
        </div>
      </div>
    </section>
  )
}

export default GetApp