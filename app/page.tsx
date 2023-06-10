"use client"
import React from 'react'
import Image from 'next/image'

import {getAllProducts} from '../fetch/productsList'
import Navbar from '@/components/navbar'
import { getAllcategories } from "@/fetch/categoryList";
import { getAllSellers } from '@/fetch/sellerList';
import HeroSection from '@/components/hero';


export default async function  Home() {
 

  return (
    <main className="">

    <HeroSection/>
    {/* {data.map((d:any, ind:number)=>{
      return(
         <p key={ind}>{d.Product_name}</p>
    )})} */}
    </main>
  )
}
