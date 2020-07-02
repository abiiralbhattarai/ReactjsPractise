import React from 'react';
function FancyBorder(props){
    return(
        <div className={'p-5 border border-' + props.color}>
        {props.children}
        </div>
    );
}

function Dialog(props){
    return(
        <FancyBorder color="warning">
        <h1 className="Dialog-title">
        {props.title}
        </h1>
        <p className="Dialog-message">
        {props.message}
        </p>
        {props.children}
        </FancyBorder>
    );
}

class SignUpDialog extends React.Component{
    state = {
        login:''
    };
    handleChange = (e) =>{
        this.setState({login: e.target.value});

    }
    handleSignUp =( )=>{
        alert(`Weclome aboard, ${this.state.login}!`)
    }
   render(){
       return(
           <Dialog title="Mars Exploration Program"
           message="How should we refer to you?">
           <input value={this.state.login}  onChange={this.handleChange} />
           <button onClick={this.handleSignUp}>
           Sign Me up!
           </button>
           </Dialog>

       );
   } 

   
}

 
export default SignUpDialog;
