import type { NextPage } from 'next'

import {default as HomeScreen} from '@/components/screens/Home'
import Header from '@/components/Header'
import Container from '@/components/Container'
import NavigationBar from '@/components/NavigationBar'

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Header rightIcon='iconGear' />
        <HomeScreen />
        <NavigationBar />
      </Container>
    </>
  )
}

export default Home
