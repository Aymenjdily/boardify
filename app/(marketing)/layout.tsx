import React from 'react'
import { Box } from '@radix-ui/themes'
import Navbar from './_components/navbar'
import Footer from './_components/footer'

const MarketingLayout = ({ children } : { children: React.ReactNode }) => {
  return (
    <Box className='min-h-screen bg-slate-100'>
        <Navbar />
        <main className='pt-40 pb-20 bg-slate-100'>
            {children}
        </main>
        <Footer />
    </Box>
  )
}

export default MarketingLayout