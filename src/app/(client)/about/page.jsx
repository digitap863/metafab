import AboutBanner from '@/components/about/banner'
import DesignStats from '@/components/about/Design'
import Story from '@/components/about/Story'
import Award from '@/components/about/Award'
import Faq from '@/components/about/Faq'
import React from 'react'
import Trust from '@/components/about/Trust'
import Clients from '@/components/about/Clients'

function page() {
  return (
    <div className='w-full'>
      <AboutBanner />
      <DesignStats />
      <Story />
      <Clients />
      <Trust />
      <Award />
      <Faq />
    </div>
  )
}

export default page