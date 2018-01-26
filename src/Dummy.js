import React from 'react';


import Test from "./Test"

class Dummy extends React.Component {
    render(){
        return (
            <div style={{ border: "1px solid green", padding: "10px"}}>
                <Test   
                   changeName={this.props.changeName}
                    name={this.props.name} />
            </div>
        )
    }
}

export default Dummy;