import React , {useState, useEffect} from 'react'
import axios from 'axios'

export default function Countries() {
    const [data, setData] = useState([])

    // get request for US data 
    const getData = () =>{
        axios.get('https://vschool-cors.herokuapp.com?url=https://api.covidtracking.com/v1/us/current.json')
        .then(response => 
            setData(response.data))
            .catch(err => console.log(err.data))
    }

    useEffect(()=>{
        getData()
     }, [])
     
    return (
        <div>
            {data.map(item => {
                 return (
                     <div>
                        <h1>Current COVID information for the United States: </h1>
                        <p>Total tests administered: {item.totalTestResults}</p>
                        <p>Positive tests: {item.positive}  Negative Tests: {item.negative}</p>
                        <p>Hospitalized in the United States: {item.hospitalized}</p>
                        <p>Currently on a ventilator: {item.onVentilatorCurrently}</p>
                    </div>)
                })
            }
        </div>
    )
}
