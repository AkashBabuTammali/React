import {useState} from 'react'

function Card(title) {
  const [count, setCount] = useState(0);
  const start = ()=>{
    setInterval(countDown, 1000)
  }

  const countDown = ()=>{
      setCount((count)=>count+1)
  }


  return (
    <div>
      Active count {count} <br />
      <button onClick={start}>start</button>
    </div>
  );
}
export default Card;
