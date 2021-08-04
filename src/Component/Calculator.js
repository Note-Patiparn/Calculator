import React, {useState} from 'react'

function Calculator() {

    const [result, setResult] = useState('')

    const handleClick = (e) => {
        setResult(result.concat(e.target.value))
    }

    const clear = () => {
        setResult('')
    }

    const calculate = () => {
        try {
            setResult(eval(result).toString())
        } catch(err) {
        setResult('error')
        }
    }

    return(
        <div className='container'>
            <form>
                <input 
                    type='text'
                    value={result}
                    name={result}
                />
            </form>

            <div className='keyPad'>
                <button onClick={clear} id='clear' className='btn hightlightkeybtn'>C</button>
                <button onClick={handleClick} value='/' className='btn hightlightkeybtn'>/</button>
                <button onClick={handleClick} value='%' className='btn hightlightkeybtn'>%</button>
                <button onClick={handleClick} value='7' className='btn '>7</button>
                <button onClick={handleClick} value='8' className='btn '>8</button>
                <button onClick={handleClick} value='9' className='btn '>9</button>
                <button onClick={handleClick} value='*' className='btn hightlightkeybtn'>x</button>
                <button onClick={handleClick} value='4' className='btn '>4</button>
                <button onClick={handleClick} value='5' className='btn '>5</button>
                <button onClick={handleClick} value='6' className='btn '>6</button>
                <button onClick={handleClick} value='+' className='btn hightlightkeybtn'>+</button>
                <button onClick={handleClick} value='1' className='btn '>1</button>
                <button onClick={handleClick} value='2' className='btn '>2</button>
                <button onClick={handleClick} value='3' className='btn '>3</button>
                <button onClick={handleClick} value='-' className='btn hightlightkeybtn'>-</button>
                <button onClick={handleClick} value='0' className='btn '>0</button>
                <button onClick={handleClick} value='.' className='btn '>.</button>
                <button onClick={calculate} id='equal' className='btn hightlightkeybtn'>=</button>
            </div>
        </div>
    )
}

export default Calculator


/* 

keycode 

numpad 0	96
numpad 1	97
numpad 2	98
numpad 3	99
numpad 4	100
numpad 5	101
numpad 6	102
numpad 7	103
numpad 8	104
numpad 9	105

multiply	106
add	107
subtract	109
decimal point	110
divide	111
equal sign	187
backspace: 8

*/