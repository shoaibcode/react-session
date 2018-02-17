import React from 'react';

/*
class Test extends React.Component {
  render(){
      return (
          <div style={{ border: "1px solid red"}}>
            
           "Props" +  {this.props.name} <br />


             <button>
                 Change Lang
             </button>
          </div>
      )
  }    
}*/

/*
- Lifecycle
- no State;
- no ref
*/



function Test(props){
    return <div style={{ border: "1px solid red" }}>

         <br />
          

        <button onClick={() => {
            props.clickme("hello")
        }}>
            Change Lang
        </button>
    </div>  
}

export default Test