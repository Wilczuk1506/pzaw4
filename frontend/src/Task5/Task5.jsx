import { useEffect, useState } from "react";
import axios from 'axios';
import Verse from "./Verse";
function Task5(){

    const [employees, setEmployees] = useState(undefined);

    const [currentCLicked, setCurrentClicked] = useState(-1);

    const [nameSearch, setNameSearch] = useState("");
    const [salarySearch, setSalarySearch] = useState(0);
    const [isGreater, setIsGreater] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:8000/task5/employees", {
            params: {
                name: nameSearch,
                salary: salarySearch,
                greater: isGreater,
            }
        })
        .then((res) => {
            setEmployees(res.data);
        })
        .catch((err) => {
            console.error(":c", err);
        });
    }, [nameSearch, salarySearch, isGreater]);



    return (
        <>
            <div>
                <input type="text" className="form-control w-25" placeholder="Search by Name" onChange={(e) => setNameSearch(e.target.value)}/>
                <select className="form-select w-25" onChange={(e) => setIsGreater(!isGreater)}>
                    <option value={true}>&gt;</option>
                    <option value={false}>&lt;</option>
                </select>
                <input type="number" className="form-control w-25" placeholder="Search by Salary" onChange={(e) => setSalarySearch(e.target.value)}/>
            </div>

            <table className="table">
                <tbody>
                    {
                        employees?.map((element, index) => {
                            return(
                                <Verse 
                                    verse={element}
                                    key={index}
                                    onClick={() => setCurrentClicked(index)}
                                    clicked={currentCLicked === index ? true : false}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Task5;