import React from "react";

const Parameters = (props) =>{
const key = props.match.params.key;
const color = props.match.params.color;
const backgroundColor = props.match.params.background;
const divStyle = {
    color,
    backgroundColor,
    textAlign: "center"
  };

console.log(key)
    return(
        <>
            {isNaN(key+"35")
            ? <h1 style={divStyle}>The word is: {key}</h1>
            : <h1 style={divStyle}>The number is : {key}</h1>
            }
        </>
    )
}
export default Parameters