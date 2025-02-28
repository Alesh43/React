import {useState} from 'react'

const ReactHook = () => {
    const[count, setCount] = useState(0);

    const onIncrease = () => {
        setCount(count+1)
    }

    const onDecrease = () => {
        setCount(count-1)
    } 
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={onIncrease}
        className= 'border bg-purple-500 text-black px-5 py-2'>
            Increase

      </button>

      <button
        onClick={onDecrease}
        className= 'border bg-purple-500 text-black px-5 py-2'>
            Decrease
        </button>

    </div>
  )
}

export default ReactHook
