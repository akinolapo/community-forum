import ExploreCategory from '@/components/ExploreCategory'
import FeaturedTalk from '@/components/FeaturedTalk'
import Hero from '@/components/Hero'
import Highlight from '@/components/Highlight'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <Highlight />
      <ExploreCategory />
      <FeaturedTalk />
    </div>
  )
}

export default page