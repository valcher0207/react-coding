import React from 'react';
import './App.css';
import Component1 from './component/Component1'
import Component2 from './component/Component2'


class App extends React.Component<any> {
  render() {
    console.log("render called ...")
    return (
      <div style={{textAlign: 'center'}}>
        <Component1 nama="Valeska" umur={15} kelas="XE" pagi={true}/>
        <h1>
          <Component2/>
        </h1>
      </div>
    );
  }
}

export default App;