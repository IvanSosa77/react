import React, { Component } from 'react';


class estado extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : 'React',
        }
    }
    handlerValue= (e)=>{
        this.setState(
            {
            name : e.target.value,
        })
        

    }
    render(){
        return(
            <div>
                <input placeholder="Ingresa su nombre" onChange={this.handlerValue}
                />
                {console.log(this.state.name)}
            </div>
        );
        
    }
}

export default estado;