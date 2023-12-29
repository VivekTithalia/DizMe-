import React, { useRef } from 'react'

const AllContext = () => {

    const abouts= useRef(null)

    const scrolltotop=(elementRef)=>{
        window.scrollTo({
            top:elementRef.current.offsettop,
            behavior:"smooth"
            
        })


    }
  return (
    <>
    <div>AllContext</div>
    
    </>
  )
}

export default AllContext