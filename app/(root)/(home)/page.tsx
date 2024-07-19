"use client"
import React, {useEffect} from 'react'
import Hero from '@/components/Hero'
import { createClient } from 'contentful';

const Home = () => {
  return (
    <main>
      <Hero />
    </main>
  )
}

export default Home