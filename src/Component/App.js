import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import Logo from './TBook/Logo';
import Nav1 from './TBook/Nav1';
import MessengerCustomerChat from 'react-messenger-customer-chat';

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
        <MessengerCustomerChat
          pageId="100172888884902"
          appId="1123026281504793"
          language="vi_VN"
      />
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
