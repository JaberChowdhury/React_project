import { useState } from "react";

const App = () => {
    const makeBlock = () => {
      let blocks = []
      for(let i=0; i<9; i++){
        blocks.push({
          id : crypto.randomUUID(),
          value : "",
        })
      }
      return blocks;
    }
  
    const [block, setBlock ] = useState<ReturnType<typeof makeBlock>>([...makeBlock()])
    const [clicked, setClicked] = useState<string[]>([])
    
    
    const handleClick = (item:{id : string; value: string;}) => {
    }
    
    
    return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col relative">
      <div className="w-4/5 grid p-2 justify-center items-center grid-cols-3 border-2">
        {
          block.map((item,i)=>{
            return(
              <div onClick={()=>handleClick(item)} key={i} className="h-20 md:h-[200px] border-2 m-2 text-center">{item.value}</div>
            )
          })
        }
      </div>
      <p>{JSON.stringify({ block },null,2)}</p>
      <p>{JSON.stringify({ clicked })}</p>
    </div>
  );
}

export default App;