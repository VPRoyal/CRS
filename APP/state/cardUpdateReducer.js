const ACTIONS={
    SEND_REPLY:"reply",
    LEVELUP:"levelup",
    UPVOTE:"upvote",
    RESET:"reset"
}
const initialState={
    action:null,
    data:null,
    trigger:false,
}
const reducer=(state,{type, payload})=>{
    switch (type) {
        case ACTIONS.SEND_REPLY:
            return {...state, action:ACTIONS.LEVELUP, data:payload, trigger:true}
        case ACTIONS.LEVELUP:
            return {...state, action:ACTIONS.LEVELUP, data:payload, trigger:true}
        case ACTIONS.UPVOTE:
            return {...state, action:ACTIONS.UPVOTE, data:payload, trigger:true}
        case ACTIONS.RESET:
            return initialState;
        default:
            return state;
    }
}
module.exports={
    reducer,
    initialState, 
    ACTIONS
}