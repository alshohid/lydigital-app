const DhakaMap = ({area,offsets})=>{
console.log("offsets",offsets)
    return (
        <>  <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <title>Dhaka Division Map</title>
        <defs>
          {/* Define gradient dynamically based on area */}
          <linearGradient id="dynamicGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <> 
            {
                offsets.map((item, i) => (
                    <stop key={i} offset= {`${item.offset}%`} style={{ stopColor: `${item.color}`, stopOpacity: 1 }} />
                ))
            }
            </>
          
          </linearGradient>
        </defs>
        
        {/* Background */}
        <rect width="100%"  fill="green" />
        
        {/* Dhaka Division Boundary with gradient color */}
        <path d="M200,150 L250,180 L300,160 L350,200 L380,250 L360,300 L320,340 L280,350 L250,310 L220,270 L190,240 Z" fill="url(#dynamicGradient)" stroke="black" strokeWidth="2" />
     {/* Labels */}
        <text x="220" y="220" fontFamily="Arial" fontSize="20" fill="black">Dhaka</text>
        <text x="340" y="220" fontFamily="Arial" fontSize="20" fill="black">Narayanganj</text>
        <text x="300" y="300" fontFamily="Arial" fontSize="20" fill="black">Narsingdi</text>
      </svg> 
      <div className="text-red-500">Area: {area} square units</div>
      </>
    )
 
    
}
export default DhakaMap;