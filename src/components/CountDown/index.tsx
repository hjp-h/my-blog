import { useEffect, useState } from "react";

type IProps = {
  timeout:number;
  onEnd?:() => void;
}
const CountDown = (props:IProps) => {
  const {timeout,onEnd} = props;
  const [count,setCount] = useState<number>(timeout||60);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => {
        if(count===0){
          onEnd?.();
          clearInterval(intervalId);
          return count
        }
        return count-1
      });
    },1000)
    return () => {
        clearInterval(intervalId)
    }
  },[timeout,onEnd])
  return (
    <div style={{color:"#909090"}}>{count}</div>
  )
}
export default CountDown