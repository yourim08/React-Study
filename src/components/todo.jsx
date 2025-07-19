import { useState } from "react";

export default function ToDoInput() {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState([])


    const handleAdd = () => {
        // 앞에 있던 내용 뒤에 추가 (...)
        setTodos([...todos, text])
        setText("")
    }

    return (
        <div>
            <input
                value={text} // 입력창 연결
                onChange={(e) => setText(e.target.value)}
                placeholder="할 일을 입력하세요"
            />
            <button onClick={handleAdd}>추가</button>
            <p>입력한 내용 : {text}</p>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                    </li>
                ))}
            </ul>
        </div>
    )
}