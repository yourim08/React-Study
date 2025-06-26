import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    // const [상태변수, 상태변경함수] = useState(초기값);
    return (
        <div>
            <p>현재 숫자 : {count}</p>
            <button onClick={()=>setCount(count+1)}>+1</button>
        </div>
    )
}
// 상태변수는 상태변경함수로만 바꿀 수 있다.
// onclick은 중괄호 안에 넣는다. js는 따옴표
export default Counter;