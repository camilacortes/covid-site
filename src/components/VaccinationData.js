import React , {useState, useEffect} from 'react'
import axios from 'axios'
import DisplayVaccines from './DisplayVaccines';


export default function VaccinationData(props) {
    const [fdaApproved, setfdaApproved] = useState([])
    const [selection, setSelection] = useState({})


    const optionsFDA = {
        method: 'GET',
        url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-fda-approved-vaccines',
        headers: {
          'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
          'x-rapidapi-key': '7e9e847746msh8410e9c6318dfd0p180062jsnf398b96d8a7e'
        }
      };
    
      const getApproved = () => {
        axios.request(optionsFDA)
        .then(response => {
            console.log(response)
            setfdaApproved(response.data)})
            .catch(err => console.log(err.data))
        
      }
   
      useEffect(()=>{
          getApproved()
      },[])



    const handleSelect = (e) =>{
        const {value} = e.target;
         const currentVax = fdaApproved.find( vaccine => {
            if(vaccine.developerResearcher === value){
                return vaccine;
            }
        })
        setSelection(currentVax)
        console.log(currentVax)
    }

    return (
        <>
        <div className="drop-down">
        <select onChange={(e) => handleSelect(e)} >
            {
                 fdaApproved.map(vaccine => {
                    return (
                        <option 
                        value={vaccine.developerResearcher}
                        >{vaccine.developerResearcher}</option>
                    )
                    
                  })
            }
        </select> 
        </div>
            <div className="display-vax">
            <DisplayVaccines obj={selection}/>
            </div>
            </>
        )
}
