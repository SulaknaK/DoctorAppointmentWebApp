import React from 'react'
import Header from '../components/Header'
import SpecialtyMenu from '../components/SpecialtyMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

function Home() {
  return (
    <div>
        <Header></Header>
        <SpecialtyMenu></SpecialtyMenu>
        <TopDoctors></TopDoctors>
        <Banner></Banner>
    </div>
  )
}

export default Home
