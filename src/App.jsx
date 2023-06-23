import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { PLUS_ONE, MINUS_ONE } from './redux/modules/counter';
import { plusOne, minusOne } from "./redux/modules/counter";
import { plusN, minusN } from "./redux/modules/counter";

function App() {
  const [number, setNumber] = useState(0)
  // 여기에서 store에 접근하여 counter의 값을 읽어보고 싶다
  // useSelector
  const counter = useSelector((state) => {
    return state.counter;
  });

  // number가 바뀔때바다 콘솔에 찍어줌!
  // useEffect(()=>{
  //   console.log(number)
  // }, [number])

  // dispatch를 세팅하자
  const dispatch = useDispatch();

  // console.log(counter.number);

  return (
    <>
      <div>
        현재 카운트 : {counter.number}
      </div>
      <div>
        <input type="number" 
        value={number}
        onChange={(event)=> {
          setNumber(+event.target.value)
        }}
        />
      </div>
      <button
        onClick={() => {
          // dispatch({
          //   type: PLUS_ONE,
          // payload: '',
          // }) >> 아래처럼 리팩토링!
          // dispatch(plusOne()); >> +1 작동

          dispatch(plusN({number}))
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          // dispatch(minusOne());
          dispatch(minusN({number}))
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
