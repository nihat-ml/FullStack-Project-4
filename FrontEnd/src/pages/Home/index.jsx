import React from 'react'
import UserHero from '../../components/UserHero'
import Products from '../Products'
import UserAbout from '../../components/UserAbout'

function Home() {
  return (
    <div>
      <UserHero/>
      <Products/>
      <UserAbout/>
    </div>
  )
}

export default Home
