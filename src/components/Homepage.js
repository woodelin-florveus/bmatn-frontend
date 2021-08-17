import React from "react"
//import PackageCards from "./PackageCards"




function Homepage(){
    return (
        
		<>
		<h1 style={{textAlign:"center", padding:"10px", fontSize:"5em"}}>Gallery of Hardwork</h1>
        <div className="main_container" style={{margin:"10px"}}>    
        <div className="horizontal"><img src="images/image1.jpg" alt="dummy_image"/></div>
		<div className="vertical"><img  src="images/image2.jpg" alt="dummy_image"/></div>
		<div><img src="images/image9.jpg" alt="dummy_image" /></div>
		<div className="big"><img   src="images/image4.jpg" alt="dummy_image"/></div>
		<div className="vertical"><img  src="images/image5.jpg" alt="dummy_image"/></div>
		<div className="horizontal"><img  src="images/image6.jpg" alt="dummy_image"/></div>
		<div><img src="images/image7.jpg" alt="dummy_image"/></div>
		<div className="horizontal"><img  src="images/image8.jpg" alt="dummy_image"/></div>
		<div><img src="images/image9.jpg" alt="dummy_image"/></div>
		<div><img src="images/image2.jpg" alt="dummy_image"/></div>
        </div> 
		</>
    )
}

export default Homepage;