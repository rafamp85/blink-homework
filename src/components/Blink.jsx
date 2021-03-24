import React, { useState, useEffect } from 'react';

export const Blink = (props) => {

    const legend = props.children;
    const [showLegend, setShowLegend] = useState(true);

    useEffect(() => {
        const blinking = () => {
            setTimeout( () => {
                setShowLegend( !showLegend )
                blinking(); 
            }, 5000);
        };

        blinking(); 
    })

    return(
        <div>
             { showLegend ? ( <div className="react-blink"> {legend} </div> ) : null }
        </div>
    )
}