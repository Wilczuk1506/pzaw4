import { useState } from 'react';
import axios from "axios";

function Task2(){

    const [name, SetName] = useState("");
    const [surname, SetSurname] = useState("");
    const [number, SetNumber] = useState(0);
    const [checkbox, setCheckbox] = useState([]);

    const [gender, SetGender] = useState("");

    const Submit = () => {
        const data = {
            name: name,
            surname: surname,
            number: number,
            check: checkbox,
            gender: gender,
        };

        console.log(data);

        axios.post("http://localhost:8000/task02/data", data)
        .then((res) => {console.log(res)})
        .catch((err) => {console.log(err)});
    }

    const handleCheckbox = (e) => {
        e.checked ? 
            setCheckbox([...checkbox, e.value]) : 
            setCheckbox(checkbox.filter(x => x !== e.value))
    }

    return (
        <div>
            Imie: <input type="text" onChange={(e) => {SetName(e.target.value)}}/>
            <br/>
            Nazwisko: <input type="text" onChange={(e) => {SetSurname(e.target.value)}}/>
            <br/>
            Liczba <input type="number" onChange={(e) => {SetNumber(e.target.value)}}/>
            <br/>
            1? <input type="checkbox" value="1" onChange={(e) => {handleCheckbox(e.target)}}/>
            <br/>
            2? <input type="checkbox" value="2" onChange={(e) => {handleCheckbox(e.target)}}/>
            <br/>
            3? <input type="checkbox" value="3" onChange={(e) => {handleCheckbox(e.target)}}/>
            <br/>
            Męskoosobowy: <input type="radio" name="gender" value="mail" onChange={(e) => {SetGender(e.target.value)}}/>
            <br/>
            Niemęskoosobowy: <input type="radio" name="gender" value="email" onChange={(e) => {SetGender(e.target.value)}}/>
            <br/>
            Innoosobowy: <input type="radio" name="gender" value="gmail" onChange={(e) => {SetGender(e.target.value)}}/>
            <input type='button' onClick={Submit} className="btn" value="lets go" />
        </div>
    );
}

export default Task2;