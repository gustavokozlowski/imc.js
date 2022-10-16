
import React from 'react'
import { ContainerHeader, AppTitle, NavbarContainer, NavbarLink } from './styles'

export const Header = () => {
  return (
 <ContainerHeader>
    <AppTitle>IMC.</AppTitle>
    <NavbarContainer>
      <NavbarLink to='/'>
       home
      </NavbarLink>
      <NavbarLink to='/about'>
       sobre
      </NavbarLink>
    </NavbarContainer>
 </ContainerHeader>
  )
}