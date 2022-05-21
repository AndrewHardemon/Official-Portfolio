import React, { useState } from "react";

function Extra() {

  const [fizz, setFizz] = useState([1,2,"Fizz",4,"Buzz"])
  const [data, setData] = useState({
    names: "",
    nums: "",
    length: "100"
  })

  const fizzbuzz = (num, opt) => {
    return num.reduce((acc,curr) => (acc + (opt.map(o => !(curr % o.num) ? o.word : "").reduce((a,c)=>a+c) || curr) +" "), "").split(" ")
  }

  const generateFizzBuzz = () => {
    const length = (isNaN(+data.length) && data.length.length) ? 100 : +data.length
    if(length > 1000){
      length = 1000
    }
    const arr = [...Array(length)].map((_,i) => i+1)
    const names = data.names.split(",")
    const nums = data.nums.split(",")

    let opt = []
    for(let i = 0; i < names?.length; i++){
      const obj = {word: names[i].trim(), num: +nums[i].trim()} 
      opt.push(obj)
    }

    if(!opt.length){
      opt = [{word: "Fizz", num: 3}, {word: "Buzz", num: 5},{word: "Dazz", num: 7}]
    }

    const results = fizzbuzz(arr,opt)
    setFizz(results)
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setData({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <>
    <div style={{display: "grid", gridTemplateColumns: "5% 50%"}}>
      <label for="names">Names</label>
      <input name="names"value={data.names} placeholder="Fizz,Buzz,Dazz" onChange={handleChange}/>
    </div>
    <div style={{display: "grid", gridTemplateColumns: "5% 50%"}}>
      <label for="nums">Numbers</label>
      <input name="nums" value={data.nums} placeholder="3,5,7" onChange={handleChange}/>
    </div>
    <div style={{display: "grid", gridTemplateColumns: "5% 50%"}}>
      <label for="length">Length</label>
      <input name="length" value={data.length} placeholder="100" onChange={handleChange}/>
    </div>
    <button onClick={generateFizzBuzz}>Get Results</button>
    <div>
      {fizz.map((fb,i) => (
        (i !== fizz.length-1) 
          ? <span style={isNaN(+fb) ? {color:"yellow"} : {color:"white"}}>{fb}, </span> 
          : <span style={isNaN(+fb) ? {color:"yellow"} : {color:"white"}}>{fb}</span>
    ))}
    </div>
    </>
  )

}



export default Extra;

