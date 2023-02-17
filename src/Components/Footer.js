import React, { useEffect } from 'react'
import styled from 'styled-components'
import { FaLinkedin,FaTwitterSquare, FaGithubSquare } from 'react-icons/fa'
import { IconContainer } from './Header'
import AOS from 'aos'
import 'aos/dist/aos.css';

const PageFooter = styled.div`
      height: 700px;
      background-color: cadetblue;
      padding: 60px;
      
 .bas{
    padding: 60px 5% 35px;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    padding-top: 50px;
    border-bottom: 1px solid black;
    font-family: "Shippori Mincho",serif;
    color:  #09f0d9;
 }
    
/*     
form{
    padding-left: 0px;
    
} */

.page-footer{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 150px;
}

.page-footer2{
  line-height: 50px;
  font-family: "Shippori Mincho",serif;
}

input, textarea{
    padding: 20px;
    background: cadetblue;
    color: black;
    /* margin-top: 20px; */
    /* line-height: 20px; */
    margin-bottom: 0px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid black;
    width: 100%;
    
}

input,textarea{
  outline: none;
}



.btn{
  /* background-color: black;
  color: white; */
  background: linear-gradient(to right, rgb(255,255,255) 50%, rgb(0,0,0) 50%);
  background-size: 200%;
  background-position: right;
  float: right;
  color: white;
  padding: 15px 30px;
  margin-top: 15px;
  transition: all 0.5s ease 0s;
}

.btn:hover{
  background-position: left;
  color: black;
  
}

.btn1{
  /* background-color: white; */
  /* background:red;   */
  background: linear-gradient(to left, rgb(0,0,0) 50%, rgb(255,255,255) 50%);
  background-size: 200%;
  background-position: left;
  padding: 15px 30px;
  transition: all 0.5s ease 0.1s;
}

.btn1:hover{
  background-position:right;
  color: white;
 
}






  
`


const Footer = () => {
 useEffect(() => {
        AOS.init();
     }, [])

  return (
    <>
      <PageFooter>
       <div >
        <h3 className='bas'>I’m a frontend developer, based in  Nigeria. <br/> Currently a freelancer. You can see my hobbies on @linkedln <br/> and some photos on me too.</h3>
       </div>
       <div className='page-footer'>
        <div className='page-footer1' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <h2>DROP A LINE</h2>
            <form>
                <div>
                <input className='write' name='name' type='text' placeholder='Your Name'/>
                </div>
                <div>
                <input className='write' name='mail' type='email' placeholder='Email'/>
                </div>
                <div>
                <input className='write' name='subject' type='text' placeholder='Subject'/>
                </div>
                <div>
                <textarea className='write' name='message' placeholder='Message'/>
                </div>
            </form>
            <button className='btn'>  SEND MESSAGE</button>
        </div>
        <div className='page-footer2' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <h2>CONTACT ME</h2>
          No 5 Kisumu Avenue,WUSE ZONE 2 <br/>
          +234-8091211842 <br/>
          gemjiffy@gmail.com <br/>
          <button className='btn1'> DOWNLOAD RESUME</button>
          <IconContainer style={{paddingTop: '10px'}}>
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
        </div>
       </div>
      </PageFooter>
    </>
  )
}

export default Footer