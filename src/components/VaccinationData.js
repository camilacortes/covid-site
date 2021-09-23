import React , {useState, useEffect} from 'react'
import axios from 'axios'


export default function VaccinationData() {
    const [fdaApproved, setfdaApproved] = useState([])

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
        .then(response => 
            setfdaApproved(response.data))
            .catch(err => console.log(err.data))
            console.log(fdaApproved)
      }
   
      useEffect(()=>{
          getApproved()
      },[])

    return (
        <div>
            info about vaccines
        </div>
    )
}
