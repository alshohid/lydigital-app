 import Image from 'next/image'
 import Styles from './Hero.module.css'
 const HeroSection = () => {
   return (
     <div className="w-full flex flex-row sm:flex-wrap">
          <div className={`${Styles.heroLeftSide} p-6 basis-1/2`} > 
         
           <pre className={`text-2xl md:text-3xl lg:text-4xl text-[#004AAD]`} style={{fontFamily:'Open Sans', fontSize:'60px',fontWeight:'600', }}>Renovate with confidenc
             
           </pre>
            <pre className={`text-[#004AAD] text-2xl md:text-3xl lg:text-4xl`}style={{fontFamily:'Open Sans', fontSize:'50px',fontWeight:'600', }}>With <span className='underline'>TaravaUx</span>  Renovo.</pre>
          <h3 className={`text-base md:text-lg lg:text-xl ${Styles.heroLeftSideTexth3}`}>
            Connecting building experts and demanding clients.
          </h3>

           <div>
            
           </div>
          </div>
           <div className={`basis-1/2 flex justify-center align-middle`} >
             <h1> 
               <Image 
               src='/images/heroSection.jpg'
                width={522}
                height={484}
                alt='image'
                layout="responsive"
               />
              </h1>
            </div>
     </div>
   )
 }
 
 export default HeroSection