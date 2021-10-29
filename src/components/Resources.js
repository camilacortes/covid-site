import React from 'react'

export default function Resources() {
    return (
        <div>
        <div className="resources">
            <h1>Resources for the State of Utah</h1>
        </div>
        <div className="resource-links">
            <ol>
                <p> 
                    Community Resources: <a href="https://coronavirus.utah.gov/community-resources/" target="_blank">
                    Community Resources</a>
                </p>
                <p> 
                    Housing Coalation:  <a href="https://www.utahhousing.org/covid-19.html" target="_blank">
                    Housing Assistance</a>
                </p>
                <p> 
                    Find a vaccine: <a href="https://coronavirus.utah.gov/vaccine/?gclid=CjwKCAjwn8SLBhAyEiwAHNTJbSn6Lsh_5R5A3_RjjEWcHfZDDk24VbKaklY4_V5Qj2Z-xFxM25_bcRoCknkQAvD_BwE" target="_blank">
                    Find a Vaccination Site</a>
                </p>
                <p>
                    Find a COVID testing site near you: <a href="https://coronavirus.utah.gov/utah-covid-19-testing-locations/" target="_blank">
                    Find COVID testing</a>
                </p>
            </ol>
        </div>
        </div>
    )
}
