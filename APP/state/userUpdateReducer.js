
const ACTIONS={
    ADD_DEPARTMENT:"add_department",
    ADD_NEW_SECTION:"add_new_section",
    REMOVE_NEW_SECTION:"remove_new_section",
    REMOVE_OLD_SECTION:"remove_old_Section",
    MESSAGE:"message",
    ADD_PROFILE:"add_profile",
    CANCEL:"cancel"
}
const initialState={
reset:false,
newSection:[],
closeOldSection:[],
profile:{},
department:"",
message:null
}
const reducer=(state,{type, payload})=>{
switch (type) {
    case ACTIONS.ADD_NEW_SECTION:
        return {...state, newSection: [...state.newSection, payload]}
    case ACTIONS.MESSAGE:
        return {...state, message:payload}
    case ACTIONS.ADD_PROFILE:{
        const {name, val}=payload
        if(name==="id"||name==="role") return 
        if(name==="email"||name==="phone"){
            if(state.profile.hasOwnProperty("contact")) return {...state, profile:{...state.profile, contact:{...state.profile.contact, [name]:val}}}
            else return {...state, profile:{...state.profile, "contact":{[name]:val}}}
        }
        else return {...state , profile:{...state.profile, [name]:val}}
    }
    case ACTIONS.ADD_DEPARTMENT:
        return {...state, department:payload}
    case ACTIONS.REMOVE_NEW_SECTION:{
        const sections = state.newSection.filter(sec => sec.id !== payload.id)
        return {...state, newSection:sections}
    }
    case ACTIONS.REMOVE_OLD_SECTION:
        return {...state, closeOldSection: [...state.closeOldSection, payload]}
    case ACTIONS.CANCEL:{
        const sections = state.closeOldSection.filter(sec => sec.id !== payload.id)
        return {...state, closeOldSection:sections}
    }
    default:
      return state;
}
}


module.exports={
    reducer,
    initialState, 
    ACTIONS
}