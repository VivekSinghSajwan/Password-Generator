import {useState} from "react"

function UsingUseState() {
  const [length,setLength] = useState(8); //default length is 8
  const [numbers,setNumbers] = useState(false);
  const [specialChars,setSpecialChars] = useState(false);
  const [password,setPassword] = useState("");

  function passwordGenerator() {
    const words_sample = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers_sample = "0123456789";
    const specialChars_sample = "@#$!&?()%-_";

    let str = words_sample;
    if(numbers)
      str += numbers_sample;
    if(specialChars)
      str += specialChars_sample;

    let pswrd = "";
    for(let i=0; i<=length; i++)
      pswrd += str[Math.floor(Math.random() * str.length)];

    setPassword(pswrd);
  }

  return (
    <>
      <h1 className="text-3xl p-10 underline font-bold italic text-center">
        Password Generator
      </h1>
      <div className="mainBlock w-3xl h-60 m-auto p-10 flex flex-col justify-evenly bg-black rounded-2xl border-2">
        <div className="inputField flex justify-between">
          <div className="search">
            <input type="text" value={password} readOnly className=" w-md px-5 py-2 bg-amber-50 text-black rounded-2xl" placeholder="password"/>
          </div>
          <div className="generate">
            <button onClick={passwordGenerator} className="bg-blue-700 px-10 py-2 rounded-2xl cursor-pointer text-white">Generate</button>
          </div>
        </div>

        <div className="options flex justify-evenly">

          <div className="range">
            <input 
              onChange={(e) => setLength(Number(e.target.value))} 
              type="range" 
              min={5} 
              max={30} 
              value={length} 
              step={1}
            />
            &nbsp;Length: {length}
          </div>

          <div className="numbers">
            <input 
              type="checkbox" 
              id="numbers" 
              onChange={(e) => setNumbers((prev)=> !prev) }
            />
            <label htmlFor="numbers">&nbsp;Numbers</label>            
          </div>

          <div className="specialChars">
            <input 
              type="checkbox" 
              id="specialChars" 
              onChange={(e) => setSpecialChars((prev)=> !prev)}
            />
            <label htmlFor="specialChars">&nbsp;Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default UsingUseState;
