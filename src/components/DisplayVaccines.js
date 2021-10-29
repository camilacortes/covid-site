import React from 'react'

export default function DisplayVaccines(props) {
    return(
        <div>
            <ol>
                <p>Category: {props.obj.category}</p>    
                <p>Phase : {props.obj.phase}</p>
                <p>Funder: {props.obj.funder}</p>
            </ol>
        </div>
    )
    
}
