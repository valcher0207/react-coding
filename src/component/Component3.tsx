import React from 'react';
import Picture from './ke-boom.png'

class Component3 extends React.Component {
    
    render() {
        console.log("image appears...")
        return (
           <div>
               <img src={Picture} style={{maxWidth: 150}}></img>
           </div>
        )
    }
}

export default Component3