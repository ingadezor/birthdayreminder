import Person from "./Person";
import data from "../data";
import React from "react";

function PersonList(){
    let [people, setPeople] = React.useState(data);
    
    function handleClear(){
        setPeople([]);
    }



    return(
        <section className="container">
            <h3 className="title">{people.length} Upcoming Birthdays 🎂</h3>

            {
                people.map( (person) => {
                    return <Person key={person.id} id={person.id} name={person.name} age={person.age} image={person.image} />
                })
            }


            {/* clear list button */}
            <button className="btn btn-block" onClick={handleClear}>Clear</button>
        </section>
    )
}


export default PersonList;