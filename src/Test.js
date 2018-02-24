import React from 'react';
import t from "prop-types";


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

         {props.name}
          

        <button onClick={() => {
            props.clickme("hello")
        }}>
            Change Lang
        </button>
    </div>  
}

Test.propTypes = {
  name: t.string.isRequired,
  clickme: t.func
};


Test.defaultProps = {
  name: 'ReactJS'    
}

//bool
//number
//string,
//func


export default Test