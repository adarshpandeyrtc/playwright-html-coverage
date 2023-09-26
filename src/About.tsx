import React from 'react';
import './App.css';


const About = () => {
    const [backgroundColor, setBackgroundColor] = React.useState("#1abc9c")

    const handleMakeYellowInAbout = () => {
        setBackgroundColor("#f1c40f")
      }
    return (
        <>
         <span>Current color: {backgroundColor}</span>
        <h1>hello about us page</h1>
        <div className="btn-group-colors">
          <button onClick={handleMakeYellowInAbout}>Yellow</button>
        </div>
        </>
    )
}

export default About;