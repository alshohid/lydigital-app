 import Styles from './CustomerReview.module.css'

const CustomerReview = () => {
  return (
    <div className={`${Styles.customerReviewContainer}`}>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 '>
           <div className={`${Styles.customerReviewGrid}`}>
               <button className='btn   rounded-full text-[#004AAD] text-[20px] leading-[28.8px] p-2' style={{width:'70px', height:'70px', borderRadius:'100%'}}>5000</button>
               <p className='text-[#404040] text-[20px] leading-[24px] ' style={{fontWeight:'600'}}>Expert</p>
               <p className='text-[16px] leading-[25px] text-center'> Choose them taking into account insurance and quality labels</p> 
           </div>
           <div className={`${Styles.customerReviewGrid}`}>
           <button className='btn   rounded-full text-[#004AAD] text-[20px] leading-[28.8px] p-2' style={{width:'70px', height:'70px', borderRadius:'100%'}}>30K</button>
               <p className='text-[#404040] text-[20px] leading-[24px] 'style={{fontWeight:'600'}}>Customers feedback</p>
               <p className='text-[16px] leading-[25px] text-center'> Choose them taking into account insurance and quality labels</p> 
           </div>

           <div className={`${Styles.customerReviewGrid}`}>
           <button className='btn   rounded-full text-[#004AAD] text-[20px] leading-[28.8px] p-2' style={{width:'70px', height:'70px', borderRadius:'100%'}}>20</button>
               <p className='text-[#404040] text-[20px] leading-[24px] 'style={{fontWeight:'600'}}>Years of experience</p>
               <p className='text-[16px] leading-[25px] text-center'> Choose them taking into account insurance and quality labels</p> 
           </div>
        </div>
        
    </div>
  )
}

export default CustomerReview