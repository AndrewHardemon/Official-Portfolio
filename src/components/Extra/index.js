import React, { useState } from "react";



function Extra() {

  const [fizz, setFizz] = useState([])
  const [data, setData] = useState({
    names: "",
    nums: "" 
  })

  const fizzbuzz = (num, opt) => {
    return num.reduce((acc,curr) => (acc + (opt.map(o => !(curr % o.num) ? o.word : "").reduce((a,c)=>a+c) || curr) +" "), "").split(" ")
  }

  const generateFizzBuzz = () => {
    const num = 100
    const arr = [...Array(num)].map((_,i) => i+1)
    const opt = [{word: "Fizz", num: 3}, {word: "Buzz", num: 5},{word: "Dazz", num: 7}]

    setFizz(fizzbuzz(arr,opt))
  }

  return (
    <>
    <input name="options"/>
    <input name="nums" value=""/>
    <button onSubmit={generateFizzBuzz}>Get Results</button>
    <div>
      {fizz.map(fb => (
      <p>{fb}</p>
    ))}
    </div>
    </>
  )

}



export default Extra;

