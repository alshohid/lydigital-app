"use client"
import { useState } from "react";

  const fetchData= ()=> new Promise ((r)=>setTimeout(()=>r(Date.now()),100))
const JBConnect =()=>{
  const [result,setResult]=useState();
  const data= fetchData().then((value)=>
     setResult(value)
  )

 
    return (
        <>
        <p>Jb connect home page</p>
        {
            result === data.toString() ? (
                <div>
                    Hello
                </div>

            ) : (
              <div> Good bye</div>
            )
        }
        
        
     
        </>
    )
}
export default JBConnect;