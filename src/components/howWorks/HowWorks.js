
import React from 'react'
import Styles from './HowWorks.module.css'
const HowWorks = () => {
  return (
    <div className={Styles.howWorksContainer} >
        <h1 className='text-center text-[40px] text-[#101010] font-medium leading-[124%]'> How it <span className='text-[#004AAD] underline'>works</span>  </h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3  sm:w-full'>
         <div className={`text-center ${Styles.gridBoxShadow}`}>
              <button className='btn  rounded-full '> 1 </button>
              <p className='text-[24px] leading-[160%] font-medium'>Step 1</p>
              <p className='text-[#606060] font-sans text-[16px]' > .Describe your project in a few simple steps: Nothing could be easier, let yourself be guided by our simplified route.</p> 
         </div>
         <div className={`text-center ${Styles.gridBoxShadow}`}>
              <button className='btn  rounded-full '> 2 </button>
              <p className='text-[24px] leading-[160%] font-medium'>Step 2</p>
              <p className='text-[#606060] font-sans text-[16px]' > .Describe your project in a few simple steps: Nothing could be easier, let yourself be guided by our simplified route.</p> 
         </div>

         <div className={`text-center ${Styles.gridBoxShadow}`}>
              <button className='btn  rounded-full '> 3 </button>
              <p className='text-[24px] leading-[160%] font-medium'>Step 3</p>
              <p className='text-[#606060] font-sans text-[16px]' > .Describe your project in a few simple steps: Nothing could be easier, let yourself be guided by our simplified route.</p> 
         </div>

      </div>


    </div>
  )
}

export default HowWorks