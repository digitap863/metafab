import React from 'react'
import ProductsBanner from '@/components/products/banner'
import ProductsMore from '@/components/products/Moreproducts'

function page() {
  return (
    <div className='w-full'>
      <ProductsBanner />
      <ProductsMore />
    </div>
  )
}

export default page