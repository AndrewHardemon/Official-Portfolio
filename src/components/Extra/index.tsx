import { FC, useState } from "react";
import "./index.css"


const Extra: FC = () => {

  const [fizz, setFizz] = useState(["1", "2", "Fizz", "4", "Buzz"])
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

  const fizzbuzz = (num: any, opt: any) => {
    return num
      .reduce((acc: any, curr: any) => (acc + (
        opt.map((o: any) => !(curr % o?.num) ? o?.word : ""
      )
      .reduce((a: any, c: any) => a + c) || curr) + " "), "")
      .split(" ")
  }

  const generateFizzBuzz = () => {
    const length = (isNaN(+data.length) && data.length.length) ? 100 : +data.length
    if (length > 5000) {
      return setFizz(["Please enter a number less than 5000"])
    }
    const arr = [...Array(length)].map((_, i) => i + 1)
    const names = data.names.split(",").map(name => name.trim());
    const nums = data.nums.split(",").map(name => name.trim());

    if (names?.length !== nums?.length) {
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
    console.log(largeArr, smallArr, text);
    let newText = text;
    largeArr.forEach((item, i) => {
      let regex = new RegExp(item, "g")
      console.log(regex)
      newText = newText.replace(regex, smallArr[i])
    })
    console.log(newText)
    setText(newText)
  }

  const generateNewCSS = () => {
    // let str = `{textDecoration:"none", border: "2px solid black", backgroundColor: "lightblue", textAlign:"center", borderRadius: "45%", width: "100px", padding:"8px", marginTop: "10px"}`

    //get css string and trim
    let newStr = data.css.trim()

    //if it has {} wrapping it
    if (newStr[0] === "{" && newStr[newStr.length - 1] === "}") {
      console.log("hello")
      newStr = newStr.substring(1, newStr.length - 1)
    }

    let finalStr = newStr.split(",").map(css => {
      let newCss = css.split(":")

      //handle incorrect inputs
      if (newCss.length != 2) {
        return "INVALID ENTRY"
      }

      let key = newCss[0].trim()
      key = key.replace(/[A-Z]/g, '-$&').toLowerCase()

      let value = newCss[1].trim()
      value = value.substring(1, value.length - 1)

      return `${key}: ${value};`
    })
    console.log(finalStr)
    let result = finalStr.join(`\n`)

    setCss(result)

  }


  const handleChange = (e: any) => {
    console.log(e.target.value)
    setData({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <div className="col-start-1 col-end-3 extras-container">
      
      <div className="bg-blue-900 flex extra-container">
        <h2>FizzBuzz Generator</h2>

        <div className="label_form">
          <label htmlFor="names">Names</label>
          <input name="names" value={data.names} placeholder="Fizz,Buzz,Dazz" onChange={handleChange} />
        </div>
        <div className="label_form">
          <label htmlFor="nums">Numbers</label>
          <input name="nums" value={data.nums} placeholder="3,5,7" onChange={handleChange} />
        </div>
        <div className="label_form">
          <label htmlFor="length">Length</label>
          <input name="length" value={data.length} placeholder="100" onChange={handleChange} />
        </div>
        <button onClick={generateFizzBuzz}>Get Results</button>
        <div>
          {fizz.map((fb: string, i: number) => (
            (i !== fizz.length - 1)
              ? <span style={isNaN(parseInt(fb)) ? { color: "yellow" } : { color: "white" }}>{fb}, </span>
              : <span style={isNaN(parseInt(fb)) ? { color: "yellow" } : { color: "white" }}>{fb}</span>
          ))}
        </div>
      </div>

      
      <div className="bg-blue-900 flex extra-container">
        <h2>Convert React Inline CSS</h2>
        <div className="label_form">
          <label htmlFor="css">CSS</label>
          <textarea name="css" value={data.css} placeholder="{ textDecoration: 'none' }" onChange={handleChange} />
          <label htmlFor="css-result">Result</label>
          <textarea name="css-result" className="results-box" value={css}>{css}</textarea>
        </div>
        <button onClick={generateNewCSS}>Get Results</button>
      </div>
      

      <div className="bg-blue-900 flex extra-container">
        <h2>Word Replacer</h2>
        <div className="label_form">
          <label htmlFor="original">Text</label>
          <textarea name="original" value={data.original} placeholder="Hello World" onChange={handleChange} />
          <label htmlFor="text-result">Result</label>
          <textarea name="text-result" className="results-box" value={text}>{text}</textarea>
        </div>
        <div className="label_form">
          <label htmlFor="old">Replace</label>
          <input name="old" value={data.old} placeholder="World" onChange={handleChange} />
        </div>
        <div className="label_form">
          <label htmlFor="new">Replace With</label>
          <input name="new" value={data.new} placeholder="Friend" onChange={handleChange} />
        </div>
        <button onClick={generateNewText}>Get Results</button>

      </div>
    </div>
  )

}



export default Extra;

