// React HOC (higher order component)
    //used to share functionalities among components
    //syntax  : 
    // const updatedComponent =(OriginalComponent)=>{
    //   class NewComponent extends Component{
    //     render(){
    //       return <OriginalComponent/>
    //     }
    //   }
    //   return NewComponent
    // }

import React from 'react';
import './App.css';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';

function App() {
  return (
    <div>
      <ClickCounter/>
      <HoverCounter/>
    </div>
  );
}

export default App;
