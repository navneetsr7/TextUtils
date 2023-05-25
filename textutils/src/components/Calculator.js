import React,{useState} from 'react'


function Calculator() {
    const [result,setResult]=useState("");
    const clickHandler=(e)=>{
        setResult(result.concat(e.target.value))
    }
    const ClearDisplay=(e)=>{
        setResult("");
    }
    const calculate=()=>{
        setResult(eval(result).toString())
    }
  return (
    <div className='calc' >
      <input type="text" placeholder='0' id='ans' value={result} />
      <input type="button" value="9" className='btnn' onClick={clickHandler}/>
      <input type="button" value="8" className='btnn'onClick={clickHandler}/>
      <input type="button" value="7" className='btnn'onClick={clickHandler}/>
      <input type="button" value="6" className='btnn'onClick={clickHandler}/>
      <input type="button" value="5" className='btnn'onClick={clickHandler}/>
      <input type="button" value="4" className='btnn'onClick={clickHandler}/>
      <input type="button" value="3" className='btnn'onClick={clickHandler}/>
      <input type="button" value="2" className='btnn'onClick={clickHandler}/>
      <input type="button" value="1" className='btnn'onClick={clickHandler}/>
      <input type="button" value="0" className='btnn'onClick={clickHandler}/>
      <input type="button" value="." className='btnn'onClick={clickHandler}/>
      <input type="button" value="+" className='btnn'onClick={clickHandler}/>
      <input type="button" value="-" className='btnn'onClick={clickHandler}/>
      <input type="button" value="*" className='btnn'onClick={clickHandler}/>
      <input type="button" value="/" className='btnn'onClick={clickHandler}/>
      <input type="button" value="%" className='btnn'onClick={clickHandler}/>
      <input type="button" value="Clear" className='btnn'onClick={ClearDisplay}/>
      <input type="button" value="=" className='btnn'onClick={calculate}/>
    </div>
  )
}

export default Calculator
