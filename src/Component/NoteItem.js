import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteItem extends Component {
    TwoActionButton = () => {
        this.props.ChangEditForm();
        this.props.getEditData(this.props.note);//note is a value of data in Notelist   
        console.log(this.props.note);   
    }
    removeButtonClick = () => {
        this.props.ButtonRemoveStore(this.props.note.id);
    }
    render() {
        return (
            <div className="list-item">
                <div className="card card-item card-baiviet">
                <div className="card-header" role="tab" id="Note1">
                <h5 className="mb-0">
                    <a className="card-title" data-toggle="collapse" data-parent="#NoteList" href={"#number"  + this.props.id} aria-expanded="true" aria-controls="noteContent">
                   {this.props.note.noteTitle}
                    </a>
                    <div className="btn-group float-right">
                        <button className="btn btn-primary "
                        onClick={()=>this.TwoActionButton()}>Sửa</button>
                        <button onClick={()=> this.removeButtonClick()} className="btn btn-danger">Xóa</button>
                    </div>
                </h5>
                </div>
                <div id={"number" +  this.props.id} className="collapse in" role="tabpanel" aria-labelledby="Note1">
                <div className="card-body">
                    {this.props.note.noteContent}
                </div>
                </div>
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ChangEditForm: () => {
            dispatch({type:"CHANGE_EDIT_FORM"})
        },
        getEditData: (editObject) => {
            dispatch({type:"GET_EDIT_DATA" ,editObject})
        },
        ButtonRemoveStore: (deleteID) => {
            dispatch({type:"REMOVE" ,deleteID})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);