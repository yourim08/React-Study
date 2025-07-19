import { useState, useEffect } from 'react'

export default function Fetch_02(){
    const [shouldFetch, setShouldFetch] = useState(false)
    const [posts, setPosts] = useState([])
    
    const handleClick=()=>{
        setShouldFetch(prev=>!prev)
    }

    useEffect(() => {
        if(shouldFetch){
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then((rest)=>rest.json())
            .then((data)=>setPosts(data.slice(0,10))) // 또는 ?_limit=10
        }
    },[shouldFetch])

    return (
        <div>
            <button onClick={handleClick}>불러오기</button>
            {shouldFetch &&
                <ul>
                {posts.map((post)=>(
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
                </ul>
            }
        </div>
    )
}