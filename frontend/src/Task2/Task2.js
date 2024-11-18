import { useState } from 'react';
import axios from "axios";

function Task2(){

    const [name, SetName] = useState("");
    const [surname, SetSurname] = useState("");
    const [number, SetNumber] = useState(0);
    const [checkbox1, SetCheckbox1] = useState(false);
    const [checkbox2, SetCheckbox2] = useState(false);
    const [checkbox3, SetCheckbox3] = useState(false);
    const [gender, SetGender] = useState("");

    const Submit = () => {
        axios.post("http://localhost:2000/task02/data", {
            name: name,
            surname: surname,
            number: number,
            check1: checkbox1,
            check2: checkbox2,
            check3: checkbox3,
            gender: gender,
        })
        .then((res) => {console.log(res)})
        .catch((err) => {console.log(err)});
    }

    return (
        <div>
            Imie: <input type="text" onChange={(e) => {SetName(e.target.value)}}/>
            <br/>
            Nazwisko: <input type="text" onChange={(e) => {SetSurname(e.target.value)}}/>
            <br/>
            Liczba <input type="number" onChange={(e) => {SetNumber(e.target.value)}}/>
            <br/>
            1? <input type="checkbox" onChange={(e) => {SetCheckbox1(e.target.value)}}/>
            <br/>
            2? <input type="checkbox" onChange={(e) => {SetCheckbox2(e.target.value)}}/>
            <br/>
            3? <input type="checkbox" onChange={(e) => {SetCheckbox3(e.target.value)}}/>
            <br/>
            Męskoosobowy: <input type="radio" name="gender" value="mail" onChange={(e) => {SetGender(e.target.value)}}/>
            <br/>
            Niemęskoosobowy: <input type="radio" name="gender" value="email" onChange={(e) => {SetGender(e.target.value)}}/>
            <br/>
            Innoosobowy: <input type="radio" name="gender" value="gmail" onChange={(e) => {SetGender(e.target.value)}}/>
            <button type='button' onClick={Submit}>lets go</button>
        </div>
    );
}

export default Task2;