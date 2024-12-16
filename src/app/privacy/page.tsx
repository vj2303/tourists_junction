import NavBar from '@/components/common/NavBar'
import React from 'react'
import PrivacyList from './PrivacyList'
import FooterSection from '@/components/sections/FooterSection'

const page = () => {
  return (
    <div>
        <NavBar/>
        <PrivacyList/>
        <FooterSection/>
    </div>
  )
}

export default page




