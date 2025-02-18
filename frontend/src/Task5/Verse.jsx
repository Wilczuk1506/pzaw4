function Verse({ verse, onClick, clicked }){
    return (
        <tr onClick={onClick} className={clicked ? "bg-secondary" : ""}>
            <td className="bg-transparent">{verse.id}</td>
            <td className="bg-transparent">{verse.first_name}</td>
            <td className="bg-transparent">{verse.last_name}</td>
            <td className="bg-transparent">{verse.department}</td>
            <td className="bg-transparent">{verse.position}</td>
            <td className="bg-transparent">{verse.salary}</td>
            <td className="bg-transparent">{verse.hire_date}</td>
        </tr>
    );
}

export default Verse;