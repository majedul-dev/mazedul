"use client"

import React, { ReactNode, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';

const RootLayout = ({children}: {children: ReactNode}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        {children}
        <Footer />
    </div>
  )
}

export default RootLayout