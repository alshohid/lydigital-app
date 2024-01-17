 

const ContactDetails = () => {
  return (
    <div className='container mx-auto'>
    <h3 className='text-[24px] text-[#363636]'>Complete your contact details</h3>
 <div className="  border-b border-blue-500 h-[1.5px] bg-blue-500 mb-4"></div>
 <div className='space-y-4 w-full '>
    <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3'>
       <div>  
       <label className="form-control w-full max-w-xs">
        <div className="label">
            <span className="label-text text-[#3A3541] text-[15px] font-semibold">First Name</span>
            
        </div>
        <input type="text" placeholder="Enter First Name" className="input input-bordered w-full rounded-none max-w-xs   focus:outline-none" />
        
        </label>
      </div>
      <div>  
       <label className="form-control w-full max-w-xs">
        <div className="label">
            <span className="label-text text-[#3A3541] text-[15px] font-semibold">Last Name</span>
            
        </div>
        <input type="text" placeholder="Enter Last Name" className="input input-bordered w-full rounded-none max-w-xs   focus:outline-none" />
        
        </label>
      </div>
      <div>  
       <label className="form-control w-full max-w-xs">
        <div className="label">
            <span className="label-text text-[#3A3541] text-[15px] font-semibold">Post Code</span>
            
        </div>
        <input type="text" placeholder="Enter Post Code" className="input input-bordered w-full rounded-none max-w-xs   focus:outline-none" />
        
        </label>
      </div>
      <div>  
       <label className="form-control w-full max-w-xs">
        <div className="label">
            <span className="label-text text-[#3A3541] text-[15px] font-semibold"> Phone Number</span>
            
        </div>
        <input type="number" placeholder="Enter First Phone Number" className="input input-bordered w-full rounded-none max-w-xs   focus:outline-none" />
        
        </label>
      </div>
      <div>  
       <label className="form-control w-full max-w-xs">
        <div className="label">
            <span className="label-text text-[#3A3541] text-[15px] font-semibold">City Name</span>
            
        </div>
        <input type="text" placeholder="Enter City Name" className="input input-bordered w-full rounded-none max-w-xs   focus:outline-none " />
        
        </label>
      </div>
      <div>  
       <label className="form-control w-full max-w-xs">
        <div className="label">
            <span className="label-text text-[#3A3541] text-[15px] font-semibold">Email</span>
            
        </div>
        <input type="email" placeholder="Enter Email" className="input input-bordered w-full rounded-none max-w-xs  focus:outline-none" />
        
        </label>
      </div>

    </div>

 </div>
 </div>
  )
}

export default ContactDetails