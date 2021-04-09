import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import Logo from './TBook/Logo';
import Nav1 from './TBook/Nav1';

class App extends Component {
  ShowForm = () => {
    if(this.props.isEdit){
      return <NoteForm />
    }
  }
  render(){
    return (
      <div>
      <Logo />
        <Nav1 />
        <div className="container-fluid">  
          <div className="row">
          </div>
        </div>
      </div>
     
      
      );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
export default connect(mapStateToProps)(App)
