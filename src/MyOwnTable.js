import React from "react";
import MyOwnRow from "./MyOwnRow";
import { useState } from "react";
function MyOwnTable() {
  const data = ["tekst1", "tekst2", "tekst3", "tekst4", "tekst5"];
  const data2 = [
    {
        id:"1f516a54-f8d0-4422-b75a-983cf585737e",
        key1:"tekst1",
        key2:"tekst2",
    },
    {
        id:"fe86134c-8721-4a94-af51-829639adffda",
        key1:"tekst3",
        key2:"tekst4",
    },
    {
        id:"53db5f5c-619d-4cc8-a827-f2ef1e7d22c6",
        key1:"tekst5",
        key2:"tekst6",
    },
    
  ]
  const [flag,setflag] = useState(false);
  return (
    <div>
        {/* {flag ? <div>true</div> : <div>flag is false</div>} */}
        {flag ? <div>flag is true</div> : null}
        <input type="button" value={"zmien flage"} onClick={() => setflag(!flag)}></input>
    <table style={{width:45+"%", background:"lightblue"}}>
      <thead>
        <tr>
          <th>index</th>
          <th>tekst</th>
          <th>puste</th>
        </tr>
      </thead>
      <tbody>
        {data.map((el,index, arr ) => {
            return(
                <tr key={index}>    
                    <td>{index + 1}</td>
                    <td>{el}</td>
                    <td></td>
                </tr>
            )
        })}
        {data2.map((el, index, arr) => <MyOwnRow index = {index + data.length} el = {el.key1} el2 = {el.key2} onButtonClick = {() => setflag(!flag)}/>)}
      </tbody>
    </table>
    </div>
  );
}
export default MyOwnTable;