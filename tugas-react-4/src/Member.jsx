import { useState } from "react"
import Button from "./Button"

const Member = (props) => {

    const [like, setLike] = useState(true);
    const [detail, setDetail] = useState(true);

    const handleLike = () => {
        setLike(!like)
    }
    const handleDetail = () => {
        setDetail(!detail)
    }


    const cardStyle = {
        display: "flex",
        flexDirection: "column",
        width: 200,
        height: 300,
        borderRadius: 15,
        padding:10,
        margin: 20,
        backgroundColor : "lightgrey"
    }


    return (
        <div style={cardStyle}>
            <img src={props.src} alt="NCT-members" />
            <div>
            <h4>{props.name}</h4>

                {detail &&
                    <>
                        <p>{props.desc}</p>
                    </>
                }

            </div>
            <div style={{display:"flex", gap:10}}>
                <Button onClick={handleLike} style={{width:70, height:25, border:"none", borderRadius: 7, backgroundColor: `${like ? "plum" : "purple"}`}}>{like ? "Like" : "Dislike"}</Button>
                <Button onClick={handleDetail} style={{border:"none", borderRadius: 7, backgroundColor: `${detail? "plum" : "purple"}`, }}>{detail ? "Show More" : "Show Less"}</Button>

            </div>
        </div>
    )
}

export default Member