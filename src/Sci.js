import { useRef } from "react";

function Sci(){
    const inputRef = useRef();

    const HandleButton = () => {
        console.log("they hit the second tower...");
        console.log(inputRef.current.value);
    }
    const HandleInputText = (event) => {
        console.log("We got a message...", event.target.value);
    }
    return (
        <div>
            <input type="button" value="przycizg" onClick={HandleButton}/>
            <input ref={inputRef} type="text" onChange={HandleInputText}/>
        </div>
    );
}

export default Sci;