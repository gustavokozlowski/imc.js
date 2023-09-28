import { Container }from './styles'
import React from 'react'
import { About } from '../../pages/about'
import { Home } from '../../pages/home'
import { Footer } from '../footer'

export const MainContainer = () => {
  return (
 <Container>
    <Home />
    <About  />
    <Footer />
 </Container>
  )
}