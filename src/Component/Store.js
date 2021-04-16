import {dataNote} from './Firebase';

var redux = require('redux');
const dataInitialState = {
    isEdit : false,
    editItem :[],
    isAdd : false 
}
const allReducer = (state = dataInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            dataNote.push(action.getItem)
            console.log( 'Thêm ' + JSON.stringify(action.getItem) + " thành công");
            return state

        case "CHANGE_EDIT_FORM":
            return {...state, isEdit:!state.isEdit}
        
        case "CHANGE_ADD_FORM":
            return {...state, isAdd:!state.isAdd}

        case "GET_EDIT_DATA":
            console.log(action.editObject + "hiển thị dữ liệu");
            return {...state,editItem:action.editObject}
            
            

        case "REMOVE":
            dataNote.child(action.deleteID).remove() 
            console.log("đã xóa phần tử có ID : " + JSON.stringify(action.deleteID)  + " thành công");
            return state

        case "EDIT":
            var data =  dataNote.child(action.getItem.id)  
            data.update({
                noteTitle : action.getItem.Title,
                noteContent : action.getItem.Content
            })
            console.log( "Cập Nhật dữ liệu  " + JSON.stringify(action.getItem) + "thành công");
            return {...state,editItem:{}}  
            
        default:
            return state;
    }
}
var store = redux.createStore(allReducer);
// store.subscribe(function(){
//     console.log(JSON.parse(JSON.stringify(store.getState())));
// })
export default store;