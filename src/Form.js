import { useRef, useState } from "react";

function Form(){
     

    const [boxStyle, setBoxStyle] = useState({
        backgroundColor: "white",
        display: "none"
    });
    const input1 = useRef("");
    const input2 = useRef("");

    const [select, setSelect] = useState(null);
    const [radio, setRadio] = useState(null);


    const submit = () => {
        if (select === null || radio === null){
            return;
        }

        setBoxStyle(
        {
            backgroundColor: radio.value,
            display: "block"
        });


    }

    const clear = () => {
        input1.current.value = "";
        input2.current.value = "";

        radio.checked = false;

        setBoxStyle(
            {
                backgroundColor: "white",
                display: "none"
            });
    }

    return (
        <div>
            <div>
                <label>
                    Input1:
                    <input type="text" ref={input1}></input>
                </label>
                <br />
                <label>
                    Input2:
                    <input type="text" ref={input2}></input>
                </label>
                <br />
                <label>
                    Select:
                    <select>
                        <option value={"GPU"} onClick={ (e) => { setSelect(e.target.value); }}>GPU</option>
                        <option value={'CPU'} onClick={ (e) => { setSelect(e.target.value); }}>CPU</option>
                        <option value={"RAM"} onClick={ (e) => { setSelect(e.target.value); }}>RAM</option>
                    </select>
                </label>
                <br />
                <label>
                    <input type="radio" name="radios" value={"red"} onClick={ (e) => { setRadio(e.target); }}></input>
                    Red
                </label>
                <br />
                <label>
                    <input type="radio" name="radios" value={"green"} onClick={ (e) => { setRadio(e.target); }}></input>
                    Green
                </label>
                <br />
                <label>
                    <input type="radio" name="radios" value={"blue"} onClick={ (e) => { setRadio(e.target); }}></input>
                    Blue
                </label>
                <br />
                <label>
                    <input type="radio" name="radios" value={"pink"} onClick={ (e) => { setRadio(e.target); }}></input>
                    Pink
                </label>
                <br />
                <input type="button" value="Submit" onClick={() => { submit(); }}></input>
                <input type="button" value="Clear" onClick={() => { clear(); }}></input>
            </div>
            <div style={boxStyle}>
                <p>{input1.current.value}</p>
                <p>{input2.current.value}</p>
                <p>{select}</p>
            </div>
        </div>
    );
}

export default Form;