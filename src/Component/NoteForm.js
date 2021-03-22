import React, { Component } from 'react'
import {connect} from 'react-redux';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: " ",
            noteContent: " ",
            id:""
        }
    }
    componentWillMount(){
        if(this.props.editItem){
            this.setState({
                noteTitle:this.props.editItem.noteTitle,
                noteContent: this.props.editItem.noteContent,
                id:this.props.editItem.id
            })
        }
    }
    IsChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        console.log(value);
        this.setState({
            [name]:value
        }) 
    }
    addData = (title,content) => { // nếu như có id thì sửa dl 
        if(this.state.id){ // edit form
            var EditArrayData = {}
            EditArrayData.id = this.state.id
            EditArrayData.Title = this.state.noteTitle
            EditArrayData.Content = this.state.noteContent
            this.props.getEditDataChange(EditArrayData);
            this.props.ChangEditForm()   
            alert("sữa dữ liệu thành công ")
        }
        else { // nếu không có id thì lưu lại bình thường
            var item = {};
            item.noteTitle = title;
            item.noteContent = content;
            this.props.addDataStore(item);
            alert("thêm dữ liệu thành công")
        }
    }
    changeTitleForm = () => {
        if(this.props.AddItem){
            return <h3>Thêm Mới</h3>
        }
        else{
            return <h3>Sửa Nội dụng </h3>
        }
    }
    render() {
        return (
            <div className="col-4">
             {this.changeTitleForm()}
            <form>
            <div className="form-group">
            <label>Tên Tiêu Đề</label>
                <input
                 defaultValue={this.props.editItem.noteTitle}//display data from firebase
                 onChange={(event)=>this.IsChange(event)}
                 type="text" name="noteTitle"  className="form-control" placeholder="điền tên tiêu đề" aria-describedby="helpId" />
            </div>
            <div className="form-group">
                <label htmlFor>Nội dung tiêu đề</label>
                <textarea 
                defaultValue={this.props.editItem.noteContent}//display data from firebase
                onChange={(event)=>this.IsChange(event)}
                type="text" name="noteContent" className="form-control" placeholder="điền nội dung tiêu điền" aria-describedby="helpId" />
                <button onClick={()=> this.addData(this.state.noteTitle,this.state.noteContent,this.state.id)}
                type="reset" className="btn btn-block btn-primary w-100">lưu</button>
            </div>
            </form> 
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
       editItem : state.editItem,
       AddItem : state.isAdd
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:"ADD_DATA" , getItem}) 
        },
        getEditDataChange: (getItem) => {
            dispatch({type:"EDIT", getItem})
        },
        ChangEditForm: () => {
            dispatch({type:"CHANGE_EDIT_FORM"})
        }
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(NoteForm);
