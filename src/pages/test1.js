import React from 'react'
import Link from 'gatsby-link'

class test1 extends React.Component{
    constructor(){
        super();
        this.state = {name: "will"};
    }

    render(){
        setTimeout(()=>{
            this.setState({name: "Bob"});
        }, 2000)
        return(
            <div>
                {this.state.name}
                </div>
        )
    }
}
export default test1
