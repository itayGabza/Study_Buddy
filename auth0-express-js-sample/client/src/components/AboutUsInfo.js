import React from 'react';

function AboutUsInfo() {
    return (
        <div className="AboutUsStyle">
           
           {/* <Image style={{align:"center", width: 50,}} src={require('./logo.jpeg')}/> */}
            <h1 style={{textAlign:"center"}}>Study Buddy</h1>
            <p style={{textAlign:"center"}}>

            </p>
            <p style={{textAlign:"center"}}>
                Study buddy is a new friendly platform for you to find your most suitable study partner.            
            </p>
            <p style={{textAlign:"center"}}>
                Here, you can upload a request to find study partners according to your important criteria -           
            </p>
            <p style={{textAlign:"center"}}> 
                study hours, learning task, group size and more.             
            </p>
            <p style={{textAlign:"center"}}>
                After you upload your request, we will offer you the partners that match to you.            
            </p>
            <h2 style={{textAlign:"center", size:50,}}>
                Join Us!            
            </h2>
      
        </div>

    )
}

export default AboutUsInfo;