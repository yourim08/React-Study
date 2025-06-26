// function Hello({title, des}){
//     return (
//         <div>
//             <h1>{title}</h1>
//             <p>{des}</p>
//             {/* <p>안녕하세요, {props.name}님!</p>
//             <p>오늘의 공지사항은 {props.description}</p> */}
//         </div>
//     )
// }
// export default Hello;

function Hello({isLogin}){
    return (
        <div>
            {isLogin? <p>환영합니다.</p> : <p>로그인하세요.</p>}
        </div>
    )
}
export default Hello;