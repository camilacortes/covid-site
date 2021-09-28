import React , {useState, useEffect} from 'react'
import axios from 'axios'
import DisplayVaccines from './DisplayVaccines';


export default function VaccinationData(props) {
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
      }
   
      useEffect(()=>{
          getApproved()
      },[])


      const submit = (e)=>{
          e.preventDefault()
          console.log('submitted')
          display()
        } 

    return (
        <>
        <select>
            {
                 fdaApproved.map(vaccine => {
                    // return <DisplayVaccines 
                    //  name={vaccine.developerResearcher} 
                    //  category={vaccine.category}
                    //  phase={vaccine.phase}
                    //  fda={vaccine.fda}
                    //  submit={submit}/>
                    
                    return (
                        <option>{vaccine.developerResearcher}</option>
                    )
                    
                  })
            }
        </select>
            <button onClick={submit} type="submit">Submit</button>
            </>
        )
}
