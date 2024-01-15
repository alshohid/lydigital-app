 import Image from 'next/image'
 import Styles from './Hero.module.css'
 const HeroSection = () => {
   return (
     <div className="w-full flex flex-row sm:flex-wrap">
          <div className={`${Styles.heroLeftSide} p-6 basis-1/2`} > 
          <h1 className={`text-4xl md:text-5xl lg:text-6xl ${Styles.heroLeftSidehText}`}>Renovate with confidence</h1>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl ${Styles.heroLeftSidehText}`}>
            with <span className="underline">Travaux </span> Renovo.
          </h1>
          <h3 className={`text-base md:text-lg lg:text-xl ${Styles.heroLeftSideTexth3}`}>
            Connecting building experts and demanding clients.
          </h3>
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