'use client';

import NavBar from '@/components/common/NavBar'
import FooterSection from '@/components/sections/FooterSection'
import React from 'react'
import Form from './Form'

const page = () => {
  return (
    <div>
        <NavBar/>
        <Form/>
        <FooterSection/>

    </div>
  )
}

export default page