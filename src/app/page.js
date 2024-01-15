import CarftsMan from "@/components/caftsMan/CarftsMan"
import HeroSection from "@/components/hero/HeroSection"
import HowWorks from "@/components/howWorks/HowWorks"

  
 
 
 const HomePage = () => {
   return (<> 
     <div className="bg-[#F2F6FB] ">
        <HeroSection/>  
     </div>
      <div>
        <HowWorks/>
        <CarftsMan/>
      </div>
     </>
   )
 }
 
 export default HomePage