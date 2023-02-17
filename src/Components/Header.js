import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaLinkedin,FaTwitterSquare, FaGithubSquare } from 'react-icons/fa'

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  background-color: cadetblue;
  /* padding: 0px 5%; */
  align-items: center;
  position: fixed;
  top: 0;
  /* background-color: #09f0d5; */


`
const Logo = styled.div `
   font-size:30px;
   font-weight: bolder;
   text-transform: capitalize;
   font-family:  "Shippori Mincho",serif;
   padding-left: 50px;
  

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
   padding-right: 50px;

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
    scale: 1.2;
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