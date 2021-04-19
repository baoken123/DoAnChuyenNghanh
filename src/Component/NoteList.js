import React, { Component } from 'react';
import {dataNote} from '../Component/Firebase';
import NoteItem from '../Component/NoteItem';
import {connect} from "react-redux";

class NoteList extends Component {
constructor(props) {
    super(props);
    this.state = {
        dataFirebase :[]
    }
}
        formAddData = () => {
            this.props.DisplayFormAddData()
            this.props.ChangAddForm()
        }
// load data from firebase
    componentWillMount(){ // lấy dữ liệu từ firebase từ server trước khi render
        dataNote.on('value',(notes) => {
            var arrayData = [];
            notes.forEach(element =>{
                const key = element.key
                const noteTitle = element.val().noteTitle  
                const noteContent = element.val().noteContent
                arrayData.push({
                    id: key,
                    noteTitle: noteTitle,
                    noteContent : noteContent
                })
            })
            this.setState ({dataFirebase : arrayData})
        });
    }
    getData = () => {// hiển thị dữ liệu từ firebase thông qua state 
        const dataFirebase = this.state.dataFirebase
        if(dataFirebase){
            return dataFirebase.map((value, key)=>{
                return (
                    <NoteItem 
                    key={key}
                    id={key}
                    note={value}//tất cả dữ liệu
                    noteTitle={value.noteTitle}
                    noteContent={value.noteContent}
                    />
                    )
            })
        }
    }
    render() {
        return (
            
                <div className="col">
                <button className="btn btn-info bnt-AddForm" onClick={()=>this.formAddData()}>Thêm Mới</button>
                    <div id="NoteList" role="tablist" aria-multiselectable="true">
                    {
                        this.getData()
                    }
                    </div>
                </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        DisplayFormAddData: () => {
            dispatch({type:"CHANGE_EDIT_FORM"})
        },
        ChangAddForm: () => {
            dispatch({type:"CHANGE_ADD_FORM"})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
