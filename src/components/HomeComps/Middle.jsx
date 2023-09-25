import React from 'react'

export default function Middle() {
  return (
    <div style={{width:"auto", height: "400px", margin:"50px", marginTop:"160px"}}>
        <div style={{display: "flex", flex:"1", padding: "40px", margin: "40px", gap: "50px"}}>
       
        <a href= "#" style={{textDecoration:"none", textAlign:"center"}}><div style={{border: "1px black solid", width: "300px", backgroundColor: "#e6d4a7", height:"200px", borderRadius:"10px" , textDecoration:"none" }}>
         Timer
          </div></a>
          <a href= "#" style={{textDecoration:"none", textAlign:"center" }}><div style={{border: "1px black solid", width: "300px", backgroundColor: "#e6d4a7", height:"200px", borderRadius:"10px" }}>Counter</div></a>
          <a href= "#" style={{textDecoration:"none", textAlign:"center"}}><div style={{border: "1px black solid", width: "300px", backgroundColor: "#e6d4a7", height:"200px", borderRadius:"10px" }}>Todo App</div></a>
        </div>
    </div>
  )
}
