import CarftsMan from "@/components/caftsMan/CarftsMan"
import CustomerReview from "@/components/customerReview/CustomerReview"
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
        <CustomerReview/>
      </div>
     </>
   )
 }
 
 export default HomePage