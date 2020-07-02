import React from "react";
function formatDate (date){
    return date.toLocaleDateString();

}

const comment={
    date: new Date(),
    text: 'I hope you are fine',
    author:{
        name:'Asim Bhattarai',
        avatarUrl:"https://placekitten.com/g/64/64",

    },
};
 function Avtarmain(props){
    return(
        <div className="Comment">
        <div className="UserInfo">
        <img
        className="Avtar"
        src={props.author.avatarUrl}
        alt={props.author.name}
        />
        <div className="UserInfo-name">
        {props.author.name}
        </div>
        </div>
        <div className="Comment-text">
        {props.text}</div>
        <div className="Comment-date">
        {formatDate(props.date)}
        </div>
        </div>
    
    );
}

class Avtar extends React.Component{
    render(){
        return(
            <div>
            <Avtarmain
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />
  </div>
            
        );

    }

}
export default Avtar;
 
 
