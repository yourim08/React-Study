import React, { useState } from "react";

function Vote({question = "투표해주세요"}){
    const [yes, setYes] = useState(0);
    const [no, setNo] = useState(0);
    let count = yes+no;
    return (
        <div className="container" style={{
            backgroundColor: "white", 
            borderRadius: "7px", 
            width: "370px", 
            height: "300px",
            display: "block"
        }}>
            
            <h3 style={{
                color: "black",
                padding: "20px 20px 10px 20px",
                fontFamily: "Pretendard"
                }}>
                Q. {question}
            </h3>

            <p style={{
                color: "green", 
                fontSize: "15px", 
                paddingLeft: "34px", 
                fontFamily: "Pretendard", 
                display: "inline"
                }}>
                찬성
            </p>

            <p style={{
                color: "green", 
                display: "inline", 
                marginLeft: "240px", 
                fontFamily: "Pretendard"
                }}>
                <b>{yes}표</b>
            </p>

            <p style={{
                color: "red", 
                fontSize: "15px", 
                paddingLeft: "34px", 
                fontFamily: "Pretendard", 
                display: "inline-block"
                }}>
                반대
            </p>

            <p style={{
                color: "red", 
                display: "inline", 
                marginLeft: "240px", 
                fontFamily: "Pretendard"
                }}>
                <b>{no}표</b>
            </p>

            <hr style={{width:"300px"}}/>
            
            <p style={{
                color: "gray", 
                fontFamily: "Pretendard", 
                marginLeft: "145px"
                }}>
                총 {count}명 참여
            </p>

            <button style={{
                backgroundColor: "#22C55E", 
                borderRadius: "7px", width:"160px", 
                height: "40px", 
                paddingLeft: "7px", 
                margin: "17px 13px 10px 17px", 
                fontSize: "14px", 
                fontFamily: "Pretendard"}} 
                onClick={()=>setYes(yes+1)}>
                👍 찬성
            </button>

            <button style={{
                backgroundColor: "red", 
                borderRadius :"7px", 
                width: "160px", 
                height: "40px", 
                paddingLeft: "7px", 
                fontSize: "14px", 
                fontFamily: "Pretendard"}} 
                onClick={()=>setNo(no+1)}>
                👎 반대
            </button>
        </div>
    )
}   

export default Vote;