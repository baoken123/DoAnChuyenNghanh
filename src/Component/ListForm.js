import React, { Component } from 'react';
// import './App.css';
import {connect} from 'react-redux';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

class ListForm extends Component {
    ShowForm = () => {
        if(this.props.isEdit){
          return <NoteForm />
        }
      }
    render() {
        return (
            <div>
                <NoteList />
                    {
                    this.ShowForm()
                    }
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
      isEdit: state.isEdit
    }
  }
  export default connect(mapStateToProps)(ListForm)
