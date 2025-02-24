import { useEffect, useState, useCallback } from "react";
import axios from "axios";

function Task6() {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState(5);
    const [search, setSearch] = useState("");
    const [groups, setGroups] = useState([]);
    const [selectedGroups, setSelectedGroups] = useState(new Set());

    // Fetch data once (does not depend on search or selectedGroups)
    const fetchData = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:8000/Task6");

            // Extract unique groups
            const tempGroups = [...new Set(res.data.map(item => item.text.split(" ")[0]))];
            setGroups(tempGroups);
            setSelectedGroups(new Set(tempGroups)); // Initially select all groups
            setData(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // Filtered data based on search & selected groups
    const filteredData = data.filter(element => {
        const nameMatch = element.text.toLowerCase().includes(search.toLowerCase());
        const groupMatch = selectedGroups.has(element.text.split(" ")[0]);
        return nameMatch && groupMatch;
    });

    // Handle checkbox selection
    const handleCheckboxChange = (group) => {
        setSelectedGroups(prevSelected => {
            const updatedSet = new Set(prevSelected);
            if (updatedSet.has(group)) {
                updatedSet.delete(group);
            } else {
                updatedSet.add(group);
            }
            return updatedSet;
        });
    };

    return (
        <>
            <div className="w-25">
                <input
                    type="range"
                    className="form-range"
                    min={1}
                    max={5}
                    value={columns}
                    onChange={(e) => setColumns(Number(e.target.value))}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div>
                    {groups.map((group, index) => (
                        <div className="form-check form-switch" key={index}>
                            <input
                                type="checkbox"
                                className="form-check-input"
                                role="switch"
                                id={group}
                                checked={selectedGroups.has(group)}
                                onChange={() => handleCheckboxChange(group)}
                            />
                            <label htmlFor={group} className="form-check-label">{group}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`container row row-cols-${columns}`}>
                {filteredData.map((element, index) => (
                    <div className="card text-center" key={index}>
                        <img src={`sci_images/${element.filename}.${element.extension}`} alt="pp" />
                        <div className="card-body">
                            <h5 className="card-title">{element.text}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Task6;
