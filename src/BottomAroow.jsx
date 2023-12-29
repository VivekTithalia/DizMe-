import React, { useEffect, useState } from 'react'
import { FaArrowCircleUp } from "react-icons/fa";

const BottomAroow = () => {
  const [scrolltotop,setscroll]=useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{

      if(window.scrollY>300){
        setscroll(true)
      }else{
        setscroll(false)
      }
    })
  },[])

  const gototop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })

  };
  return (
    <>
   
    <div className="bottomarrow-contain">
      <div className="items fixed bottom-10 right-5 cursor-pointer  animate-bounce z-10">
        {scrolltotop &&    <FaArrowCircleUp className='text-3xl text-red-400  hover:scale-125 hover:text-orange-500 duration-200 ease-linear' onClick={gototop} />}
   
      </div>
    </div>
    </>
  )
}

export default BottomAroow