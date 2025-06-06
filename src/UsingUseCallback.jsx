import {useState,useCallback,useEffect} from "react"

function UsingUseCallback() {
  const [length,setLength] = useState(8); 
  const [numbers,setNumbers] = useState(false);
  const [specialChars,setSpecialChars] = useState(false);
  const [password,setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
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

  },[length,numbers,specialChars]) 
  
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <>
      <h1 className="text-3xl p-10 underline font-bold italic text-center">
        Password Generator
      </h1>
      <div className="mainBlock w-2xl h-60 m-auto p-10 flex flex-col justify-evenly bg-black rounded-2xl border-2">
        
        <div className="search">
          <input 
            type="text" 
            value={password} 
            readOnly 
            className=" w-md px-5 py-2 bg-amber-50 text-black rounded-bl-2xl rounded-tl-2xl" 
            placeholder="password"/>
          <button 
            onClick={copyToClipboard} 
            className="bg-blue-700 px-9 py-2 cursor-pointer text-white rounded-br-2xl rounded-tr-2xl">
              COPY
          </button>
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
              onChange={(e) => setNumbers((prev) => !prev)}
              type="checkbox" 
              id="numbers" 
            />
            <label htmlFor="numbers">&nbsp;Numbers</label>            
          </div>

          <div className="specialChars">
            <input 
              onChange={(e) => setSpecialChars((prev) => !prev)}
              type="checkbox" 
              id="specialChars" 
            />
            <label htmlFor="specialChars">&nbsp;Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default UsingUseCallback;
