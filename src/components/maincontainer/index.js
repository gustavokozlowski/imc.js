import { Container }from './styles'
import React from 'react'
import { Header } from '../header'

export const MainContainer = ({ children }) => {
  return (
 <Container>
  <Header/>
    {children}
 </Container>
  )
}