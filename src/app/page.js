"use client"
import {useState,useEffect} from "react"
import CarftsMan from "@/components/caftsMan/CarftsMan"
import CustomerReview from "@/components/customerReview/CustomerReview"
import HeroSection from "@/components/hero/HeroSection"
import HowWorks from "@/components/howWorks/HowWorks"
import AllSvgMap from "../components/contactDetails/AllSvgMap"
import calculateSvgArea from '@/lib/calculateAreaOfSvg';
  
 
 
 const HomePage = () => {
    const [area, setArea] = useState(0);
  const [offsets, setOffsets] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
   
    const pathData = "M200,150 L250,180 L300,160 L350,200 L380,250 L360,300 L320,340 L280,350 L250,310 L220,270 L190,240 Z";

 
  
    const calculatedArea = calculateSvgArea (pathData);
    setArea(calculatedArea);


      const parts = [
      { percentage: 30, color: "red" },
      { percentage: 30, color: "green" },
      { percentage: 20, color: "blue" },
      { percentage: 10, color: "yellow" },
      { percentage: 10, color: "purple" }
    ];

    let cumulativePercentage = 0;
    const calculatedOffsets = parts.map(part => {
      cumulativePercentage += part.percentage;
      return { offset: cumulativePercentage, color: part.color };
    });

    setOffsets(calculatedOffsets);

  }, []);
   return (<> 

<AllSvgMap area={area} offsets={offsets}/>
     {/* <div className="bg-[#F2F6FB] ">
        <HeroSection/>  
     </div>
      <div>
        <HowWorks/>
        <CarftsMan/>
        <CustomerReview/>
      </div> */}
     </>
   )
 }
 
 export default HomePage