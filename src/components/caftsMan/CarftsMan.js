 
 
import Styles from './CarftsMan.module.css'
import CraftCard from './CraftCard';
const CarftsMan = () => {
  return (
    <div className={`${Styles.carftsManContainer}`}> 
      <p className={`${Styles.carftsManHeaderText}`}>Finding the right <span className='text-[#004AAD]  underline'>craftsman</span>   </p>
      <p className={`text-[20px] text-[#404040] leading-[35px] text-center`}>Has never been easier Avec Travaux Renove, simplifiez votre recherche d'artisans pour des projets de qualité."</p>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
      <CraftCard/>
      <CraftCard/>
      <CraftCard/>
      <CraftCard/>
      <CraftCard/>
      <CraftCard/>
      <CraftCard/>
      
      </div>
     
    </div>
  )
}

export default CarftsMan;