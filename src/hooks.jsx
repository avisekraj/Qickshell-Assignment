import React, { useState } from "react";





const App =()=>{

// let time=new Date().toLocaleTimeString();, { useState }
// // console.log(state);
// const [ctime,setCtime]=useState(time); 

// // let count=1;
// const UpdateTime=()=>{
// time=new Date().toLocaleTimeString();

//     setCtime(time);
//     // console.log("clicked"+count++)
// };

// setInterval(UpdateTime,1000)<h1>{ctime}</h1><button onClick={UpdateTime}>Get Time</button>



const purple='#8e44ad'
const [bg,setBg]=useState(purple);
const [name,setName]=useState("Click Me")
const bgChange=()=>{
    let newBg='#34495e'
    setBg(newBg)
    setName('Ouch!! 😱')
    
}
const bgBack=()=>{
    let newBg='#6ed0f7';
    setBg(newBg)
    setName("Ayyo!! 😠")
}

    return(
        <>
        <div style={{backgroundColor:bg}}>
            <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
            </div>
        </>
    )
}
export default App;