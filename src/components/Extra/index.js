import React, { useState } from "react";
import "./index.css"


function Extra() {

  const [fizz, setFizz] = useState([1, 2, "Fizz", 4, "Buzz"])
  const [data, setData] = useState({
    names: "",
    nums: "",
    length: "100",
    original: "",
    old: "",
    new: "",
    css: ""
  })
  const [text, setText] = useState("Hello Friend")
  const [css, setCss] = useState('text-decoration: none')

  const fizzbuzz = (num, opt) => {
    return num.reduce((acc, curr) => (acc + (opt.map(o => !(curr % o?.num) ? o?.word : "").reduce((a, c) => a + c) || curr) + " "), "").split(" ")
  }

  const generateFizzBuzz = () => {
    const length = (isNaN(+data.length) && data.length.length) ? 100 : +data.length
    if (length > 5000) {
      return setFizz(["Please enter a number less than 5000"])
    }
    const arr = [...Array(length)].map((_, i) => i + 1)
    const names = data.names.split(",").map(name => name.trim());
    const nums = data.nums.split(",").map(name => name.trim());

    if(names?.length !== nums?.length){
      return setFizz(["Please enter the same number of names and numbers"])
    }

    let opt = []
    for (let i = 0; i < names?.length; i++) {
      const obj = { word: names[i].trim(), num: parseInt(nums[i].trim()) }
      opt.push(obj)
    }

    if (!opt.length) {
      opt = [{ word: "Fizz", num: 3 }, { word: "Buzz", num: 5 }, { word: "Dazz", num: 7 }]
    }

    const results = fizzbuzz(arr, opt)
    setFizz(results)
  }

  const generateNewText = () => {
    console.log("hello")
    let oldList = data.old.split(",").map(old => old.trim());
    let newList = data.new.split(",").map(neww => neww.trim());
    let text = data.original
    let largeArr = oldList.length < newList.length ? newList : oldList
    let smallArr = oldList.length < newList.length ? oldList : newList
    console.log(oldList, newList);
    largeArr.forEach((item, i) => {
      setText(text.replace(item, smallArr[i]))
    })
  }

  const generateNewCSS = () => {
    let str = `{textDecoration:"none", border: "2px solid black", backgroundColor: "lightblue", textAlign:"center", borderRadius: "45%", width: "100px", padding:"8px", marginTop: "10px"}`

    //get css string and trim
    let newStr = data.css.trim()

    //if it has {} wrapping it
    if (newStr[0] === "{" && newStr[newStr.length - 1] === "}") {
      console.log("hello")
      newStr = newStr.substring(1, newStr.length - 1)
    }

    newStr = newStr.split(",").map(css => {
      let newCss = css.split(":")
      
      //handle incorrect inputs
      if(newCss.length != 2){
        return "INVALID ENTRY"
      }

      let key = newCss[0].trim()
      key = key.replace(/[A-Z]/g, '-$&').toLowerCase()

      let value = newCss[1].trim()
      value = value.substring(1, value.length - 1)

      return `${key}: ${value};`
    })
    console.log(newStr)
    let result = newStr.join(`\n`)

    setCss(result)

  }


  const handleChange = (e) => {
    console.log(e.target.value)
    setData({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <div className="extras-container">
    <div className="extra-container">
      <h2>FizzBuzz Generator</h2>

      <div className="label_form">
        <label for="names">Names</label>
        <input name="names" value={data.names} placeholder="Fizz,Buzz,Dazz" onChange={handleChange} />
      </div>
      <div className="label_form">
        <label for="nums">Numbers</label>
        <input name="nums" value={data.nums} placeholder="3,5,7" onChange={handleChange} />
      </div>
      <div className="label_form">
        <label for="length">Length</label>
        <input name="length" value={data.length} placeholder="100" onChange={handleChange} />
      </div>
      <button onClick={generateFizzBuzz}>Get Results</button>
      <div>
        {fizz.map((fb, i) => (
          (i !== fizz.length - 1)
            ? <span style={isNaN(parseInt(fb)) ? { color: "yellow" } : { color: "white" }}>{fb}, </span>
            : <span style={isNaN(parseInt(fb)) ? { color: "yellow" } : { color: "white" }}>{fb}</span>
        ))}
      </div>
      </div>

      <br></br>

      <h2>React Inline CSS to Standard CSS</h2>

      <div className="label_form">
        <label for="css">CSS</label>
        <textarea name="css" value={data.css} placeholder="{ textDecoration: 'none' }" onChange={handleChange} />
        <textarea className="results-box" value={css}>{css}</textarea>
      </div>
      <button onClick={generateNewCSS}>Get Results</button>
      <br></br>
      <h2>Word Replacer</h2>

      <div className="label_form">
        <label for="original">Text</label>
        <textarea name="original" value={data.original} placeholder="Hello World" onChange={handleChange} />
        <textarea className="results-box" value={text}>{text}</textarea>
      </div>
      <div className="label_form">
        <label for="old">Replace</label>
        <input name="old" value={data.old} placeholder="World" onChange={handleChange} />
      </div>
      <div className="label_form">
        <label for="new">Replace With</label>
        <input name="new" value={data.new} placeholder="Friend" onChange={handleChange} />
      </div>
      <button onClick={generateNewText}>Get Results</button>


    </div>
  )

}



export default Extra;

