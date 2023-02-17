import React from 'react'
import styled from 'styled-components'
// import image1 from './Images/image1.jpeg'
import image2 from './Images/image2.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Home() {

     useEffect(() => {
        AOS.init();
     }, [])
  
  return (
    <>
      <HomePage >
        
        <div className='img'  >
         {/* <div className='img1'></div> */}
        </div>
        <div className='descrip-me' >
         <h1>
            Frontend Dev & <br /> Crypto Enthusiast
          </h1>
          <p>Hi I'm Azeez, I am focusing <br /> in building amazing <br /> Experiences. </p>
          <div>

          <button className='btn'>HIRE ME</button>
          </div>
        </div>
          
      </HomePage>
      {/* <h1>ello world @!!!</h1> */}
    </>
  )
}
export default Home

const HomePage = styled.div`
    display: grid;
    height: 800px;
    grid-template-columns: repeat(2, 1fr);
    background-color: cadetblue;
    

    .img{
      background: url(${image2});
      /* background: linear-gradient(rgba(105, 232, 232, 0.5), rgba(69, 86, 102, 0.5), rgba(195, 186, 236, 0.4)) center center / cover, url(${image2} ); */
      /* height: 800px; */
      background-size: cover;
      object-fit: cover;
      margin-left: 20%;
      /* width: 100%; */
      background-repeat: no-repeat;
      /* border: 1px solid red; */
      border-radius: 100%;
      border-top-left-radius: 40%;
      /* border-top-right-radius: 100%; */
     transition: all 0.5s ease 0s;
  }

  .img:hover{
      scale: 1.2;
  }
  /* .img1{
    width: 150%;
    height:100%;
    border: 1px solid #09f0d9;
    border-radius: 100%;
    background-color: cadetblue;
    
  } */

  .descrip-me{
    display: flex;
    justify-content: center;
    text-align: center;
    padding-right: 20px;
    flex-direction: column;
    font-family: "Shippori Mincho",serif;
    line-height: 1.2;
    font-size: 30px;
    /* color: #ffff; */
    color: #09f0d9;

  }
  p{
    font-size: 30px;
    font-family: "Chivo",sans-serif; 
    color: #ffff;
  }

  .btn{
  /* background-color: black;
  color: white; */
  border: 1px solid #333;
  font-size: 20px;
  background: linear-gradient(to right, #09f0d9 50%, cadetblue 50%);
  background-size: 200%;
  background-position: right;
  color: black;
  cursor: pointer;
  padding: 25px 50px;
  margin-top: 15px;
  transition: all 0.5s ease 0s;
}

.btn:hover{
  background-position: left;
  color: black;
  scale: 1.2;
}
`
       
