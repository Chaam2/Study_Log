import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
type CounterProps = {
  title: string;
  initValue?: number;
};
function Counter({ title, initValue = 0 }: CounterProps) {
  const [count, setCount] = useState<number>(initValue);
  function up() {
    setCount(()=>count + 1);
  }
  return (
    <>
      <h1>{title}</h1>
      <button onClick={up}>+</button> {count}
    </>
  );
}
function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}
function Counter2() {
  const [times, setTimes] = useState<string[]>([]);
  function up() {
    // times.push(getCurrentTime());
    // setTimes(times);
    const newTimes = [...times];
    newTimes.push(getCurrentTime());
    setTimes(newTimes);
  }
  return (
    <>
      <h1>Counter2</h1>
      <button onClick={up}>+</button>
      <ol>
        {times.map((v,i)=><li key={i}>{v}</li>)}
      </ol>
    </>
  );
}
function Counter3(){
  const [count,setCount]=useState<number>()
  const [step,setStep]=useState<number>(10)

  return<>
  <h1>Counter3</h1>
  <input type='number' value={step} onChange={(e)=>setStep(Number(e.target.value))}></input>
  <button onClick={()=>setCount((count===undefined?0:count)+step)}>+</button>
  </>
}

type countType={
  time:string;
  step:number;
}
function Counter4() {
  const [count,setCount]=useState<countType[]>([])
  const[step,setStep]=useState(1)
  let total = 0;
for(let i=0; i<count.length; i++){
    total = total + count[i].step;
}

  return (
    <>
      <h1>Counter4</h1>
      <input type="number" value={step} onChange={(e)=>{setStep(Number(e.target.value))}}/>
      <button onClick={()=>{
        const newCount = [...count]
        newCount.push({time:getCurrentTime(), step:step})
        setCount(newCount)
      }}>+</button>{total}
      <ol>
        {count.map((v,i)=><li key={i}>{v.time}</li>)}
      </ol>
    </>
  );
}

function App() {
  return (
    <div>
      <Counter title="불면증 카운터" initValue={10}></Counter>
      <Counter2></Counter2>
      <Counter3></Counter3>
      <Counter4></Counter4>
    </div>
  );
}

export default App;
