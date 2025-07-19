import { useState, useEffect } from "react";
function Fetch_01() {
    const [sentence, setData] = useState([]);
    // 처음에 한번 자동실행
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div>
            <ul style={{margin: "5px"}}>
                {sentence.map((data) => (
                    <li key={data.id}>
                        {data.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Fetch_01;