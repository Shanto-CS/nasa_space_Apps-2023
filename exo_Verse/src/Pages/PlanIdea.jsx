import { useState } from "react";


const PlanIdea = () => {
  return (
    // const [name,SetName] = useState(setName(''))
    
    <div className="w-[full] h-screen  flex flex-col justify-center m-auto items-center">
      <h1 className="text-3xl ">Drop Your Plan or Idea</h1>
      <p className="text-sm mb-[3%]">(Describe Your Plan)</p>
      <div className="flex w-full ">
        <div className="  w-full mr-1 flex flex-col">
            <input className="bg-tranparent text-md border-none fontmont px-4 py-2 mb-3 rounded-md" type="text" placeholder="Your planet name" />
            <textarea className="bg-tranparent text-md border-none fontmont px-4 py-2 mb-3 rounded-md" type="text" placeholder="Describe Your Planet" />
            
           <button className="bg-cyan-400 rounded text-black text-xl py-1">Submit</button>
        </div>
        </div>
        </div>
  )
}

export default PlanIdea;
