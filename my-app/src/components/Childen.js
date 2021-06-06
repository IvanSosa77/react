import React from 'react';

function Children(props){
    console.log(props)
    return(
        <div>{props.children}</div>
        
    )
}

export default Children;