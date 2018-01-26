import React from 'react';


class Test extends React.Component {
    constructor(props){
        super(props);

        this.state = {
           programinglang: "Javascript",
           myName: props.name
        }


        this.changeLang = this.changeLang.bind(this)
    }


    changeLang(){
        this.setState({
            programinglang: "Ruby",
            myName: "Redux"
        })


        this.props.changeName();
    }

    //"Props => "State"   {this.state.myName} <br />
  render(){
      return (
          <div style={{ border: "1px solid red"}}>
            
           "Props" +  {this.props.name} <br />


           "State" +   {this.state.programinglang} <br />

             <button onClick={this.changeLang}>
                 Change Lang
             </button>
          </div>
      )
  }    
}

export default Test