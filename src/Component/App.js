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
          pageId="103516431898692"
          appId="1227793614306982"
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
