import { useState, useEffect } from "react";
function Fetch_03() {
    const [time, setTime] = useState('');
    useEffect(() => {
        const timeCount = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        },1000);

        return () => {
            clearInterval(timeCount); 
        };
    }, [])

    return (
        <div>
            현재 시간 {time}
        </div>
    )
}

export default Fetch_03;