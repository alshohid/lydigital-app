 

function NewsPortalCompo({brands}) {

  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-3  text-black"> 
      {
        brands.map((item,index)=>( 
            <div className="p-3  bg-red-400" key={index}>
                <h1> {item.brandName} </h1>
                <h1> {item.brandImg} </h1>
            </div>
         ))
      }

    </div>
  )
}

export default NewsPortalCompo