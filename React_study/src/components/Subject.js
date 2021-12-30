import React, 
{Component} from 'react';

class Subject extends Component{
  render(){
    console.log('Subject rendet');
    return (
      <header>
      <h1><a href='/' onClick={function(e){
        e.preventDefault();
        this.props.onChagePage();
      }.bind(this)}>{this.props.title}</a></h1>
      {/* 이방식이  리펙토링  */}
     {this.props.sub}
    </header>
    );
  }
}

export default Subject;