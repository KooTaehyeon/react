/*eslint-disable*/
import React, {
  Component,
  useState
} from 'react';
import TOC from './components/TOC.js';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import Contol from './components/Contol';
import UPdateContent from './components/UPdateContent';
import CreateContent from './components/CreateContent';
import './App.css';
//TODO react app


class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id =3;
    this.state ={
      mode:'welcome', 
      selected_content_id:2,
      Subject:{title:'WEB',sub:"World wid Web!!"},
      welcome:{title:'welcome',desc:'Hello,React!!!'},
      contents:[
        {id:1,title:'HTML',desc:"HTML is information ..."},
        {id:2,title:'CSS',desc:"CSS is desing ..."},
        {id:3,title:'JavaScript',desc:"JavaScript is interactive ..."}
      ]
    
    }
  }
  getReadContent(){
    let i =0;
    while(i< this.state.contents.length){
      let data = this.state.contents[i];
      if(data.id === this.state.selected_content_id){
        return data;
        break;
      }
      i= i+1;
    }
  }
  getContent(){
    let _title, _desc,_article=null
      if(this.state.mode === 'welcome'){
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;
        _article = 
        <ReadContent title={_title} desc={_desc}></ReadContent>;

      }else if (this.state.mode === 'read'){
        let _content =this.getReadContent();
        _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
      }else if(this.state.mode === "create"){
        _article = <CreateContent onSubmit={function(_title,_desc){
          // add content to this.state.content
          this.max_content_id = this.max_content_id+1;
        //  this.state.contents.push({id:this.max_content_id,title:_title,desc:_desc});
        //  this.setState({contents:this.state.contents})
         let _contents= this.state.contents.concat({
         
          id:this.max_content_id,title:_title,desc:_desc
        });
        this.setState({
          contents:_contents,
          mode:'read',
          selected_content_id:this.max_content_id
        });
        // let newContent =Array.from(this.state.contents); 
        // newContent.push({id:this.max_content_id,title:_title,desc:_desc})
        // this.setState({ contents:newContent})
        //   console.log(_title,_desc);
        }.bind(this)}></CreateContent>
      }else if(this.state.mode === "update"){
       let _content = this.getReadContent();
        _article = <UPdateContent data={_content} onSubmit={function(_id,_title,_desc){
        let _contents = Array.from(this.state.contents);
        let i = 0;
        while(i<_contents.length){
          if(_contents[i].id === _id){
            _contents[i] = {id:_id,title:_title,desc:_desc}
            break;
          }
          i= i+1;
        }
          this.setState({
            contents:_contents
            ,mode:'read'
          })
        }.bind(this)}></UPdateContent>
      }
      return _article;
  }
    render() {
      console.log('App reder');
      
      console.log("render",this);
      return (
     <div className = "App" >
       {/* 정리 정돈하기 좋음! */}
       <Subject title={this.state.Subject.title}
        sub={this.state.Subject.sub}
        onChagePage={function(){
          this.setState({mode:'welcome'});
        }.bind(this)}
        >   
        </Subject>
       <TOC 
       onChangePage={function(id){
          this.setState({
              mode:"read",
              selected_content_id:Number(id)
          });
       }.bind(this)}
        data={this.state.contents}
      >
        </TOC>
       <Contol onChangeMode={function(_mode){
         if(_mode === 'delete'){
            if(window.confirm('정말 삭제할거에요?')){
              let _contents = Array.from(this.state.contents)
              let i=0;
              while(i<_contents.length){
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i,1);
                  break;
                }
                i = i+1;
              }
              this.setState({
                mode:'welcome',
                contents:_contents
              });
              alert('삭제했어요');
            }
         }else{
          this.setState({
            mode:_mode

          });
         }
       
       }.bind(this)}></Contol>
       {this.getContent()}
        </div>
    );
  }
}


export default App;