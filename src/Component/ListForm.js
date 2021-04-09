import React, { Component } from 'react';
import {connect} from 'react-redux';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import Load from './TBook/Loadimages';

class ListForm extends Component {
    ShowForm = () => {
        if(this.props.isEdit){
          return <NoteForm />
        }
      }
    render() {
        return (
            <div class="container">
            <div className="row">
            {/* <Load /> */}
            <NoteList />
                    {
                    this.ShowForm()
                    }
            </div>
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
