// 좋아요 눌러져 있으면 좋아요 취소
// 좋아요 안눌려져있으면 좋아요
import { useState } from "react";

function Like(){
    const [liked, setLiked] = useState(false);
    return(
        <div>
            <button onClick={()=>setLiked(!liked)}>
                 {liked? <p>좋아요취소</p> : <p>좋아요</p>}
            </button>
        </div>
    )
}

export default Like;