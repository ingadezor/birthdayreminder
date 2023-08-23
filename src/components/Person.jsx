

function Person(props){
    return(
        <div className="person" id={props.id}>
            <img src={props.image}/>
            <div>
                <h4>{props.name}</h4>
                <p>{props.age}</p>
            </div>
            
            
        </div>
    )
}

export default Person;