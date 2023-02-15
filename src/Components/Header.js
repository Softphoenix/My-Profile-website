import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaLinkedin,FaTwitterSquare, FaGithubSquare } from 'react-icons/fa'

const StyledHeader = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: cadetblue;
  padding: 0px 5%;
  align-items: center;

`
const Logo = styled.div `
   font-size: 25px;
   font-weight: bold;
   text-transform: capitalize;
   font-family:  "oswald", sans-serif;
   
  

`

const NavContainer = styled.nav`
      display: flex;
      gap: 30px;
      

`

const Navlink = styled(Link)`
   text-decoration: none;
   font-size: 20px;
   color: white;
   border: 1px solid transparent;
   padding: 5px 10px;
   transition: all 0.5s ease 0s;
   
  :hover{
    background: white;
    color: black;
  }
   

`
export const IconContainer = styled.div`
   display: flex;
   gap: 20px;
   font-size: 20px;

   .circle{
      height: 40px;
      width: 40px;
      display: grid;
      place-items: center;
      border: 1px solid white;
      border-radius: 100%;
      transition: all 0.5s ease 0s;
   }

   .circle:hover{
    background: white;
    color: black;
   }
`
 


const Header = () => {
  return (
    <>
    <StyledHeader>
       <Logo><span><i>SoftPhoenix</i></span></Logo>
       <NavContainer>
        <Navlink to='/'>Home</Navlink>
        <Navlink to='/about'>About</Navlink>
        <Navlink to='/portfolio'>Portfolio</Navlink>
        <Navlink to='/contact'>Contact</Navlink>
       </NavContainer>
       <IconContainer>
         <span className='circle'>
         <FaLinkedin/>
         </span>
         <span className='circle'>
         <FaTwitterSquare/>
         </span>
         <span className='circle'>
          <FaGithubSquare/>
         </span>
         </IconContainer>
    </StyledHeader>
    </>
  )
}

export default Header