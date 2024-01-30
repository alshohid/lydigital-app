import NewsPortalCompo from "@/components/newsPortal/NewsPortalCompo"
import {PrismaClient} from '@prisma/client'
  async function getData(){
     const prisma = new PrismaClient();
    const brands= await prisma.brands.findMany();
     
     return brands;
     
  }

const  NewsPotal = async()=> {
    const  data = await getData();
    
  return (
    <div> 
        <NewsPortalCompo brands ={data}/>
    </div>
  )
}

export default NewsPotal