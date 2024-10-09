import { useEffect, useRef, useState } from "react";
import "./style.css";

function Temp(){
    const nameInputText = useRef();
    const [name, setName] = useState("Welociraptor");
    useEffect(() => {console.log("name changed to: " + name)}, [name]);
    const myStyle = {
        color: "red",
        backgroundColor: "black",
        fontSize: "100px"
    };

    return (
        <div>
            <div>
                <h1 style={myStyle}>Temp</h1>
                <p className="kasztan">Kasztan</p>
            </div>
            <div>
                <p>{name}</p>
                <input type="text" ref={nameInputText}></input>
                <input type="button" value="abc" onClick={() => { setName(nameInputText.current.value); console.log(name); }}></input>
            </div>
        </div>
    );
}

export default Temp;