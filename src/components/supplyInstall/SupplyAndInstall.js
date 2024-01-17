  
import CardYorProject from '../yourProject/CardYorProject'
const SupplyAndInstall = () => {
  return (
    <div>
       <h3 className='text-[24px] text-[#363636]'>Select the type of work you want to carry out</h3>
    <div className="  border-b border-blue-500 h-[1.5px] bg-blue-500 "></div>
    <div className='space-y-4'>
       <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 space-y-6'>
        <CardYorProject/>
          <CardYorProject/>
          <CardYorProject/>
          <CardYorProject/>
          <CardYorProject/>
          <CardYorProject/>
          <CardYorProject/>
          <CardYorProject/>
          <CardYorProject/>
          <CardYorProject/>
          <CardYorProject/>

       </div>

    </div>
    </div>
  )
}

export default SupplyAndInstall