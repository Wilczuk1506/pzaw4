import { useEffect, useState } from "react";
import axios from 'axios';
import Verse from "./Verse";
function Task5(){

    const [employeesData, setEmployeesData] = useState([]);
    const [employees, setEmployees] = useState([]);

    const [currentCLicked, setCurrentClicked] = useState(-1);

    const [nameSearch, setNameSearch] = useState("");
    const [salarySearch, setSalarySearch] = useState(0);
    const [isGreater, setIsGreater] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:8000/task5/employees")
        .then((res) => {
            setEmployeesData(res.data);
            setEmployees(res.data);
        })
        .catch((err) => {
            console.error(":c", err);
        });
    }, []);

    useEffect(() => {
        const resultData = employeesData.filter((emp) => {

            const nameCheck = emp.first_name.toLowerCase().includes(nameSearch.toLowerCase()) ? true : false;
            const surnameCheck = emp.last_name.toLowerCase().includes(nameSearch.toLowerCase()) ? true : false;

            const salaryCheck = isGreater ? emp.salary > salarySearch : emp.salary < salarySearch;

            return (nameCheck || surnameCheck) && salaryCheck;
        });

        setEmployees(resultData);
    }, [nameSearch, salarySearch, isGreater, employeesData]);



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