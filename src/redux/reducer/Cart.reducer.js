import * as ActionTypes from '../ActionType'

const initstate = {
    isLoading:false,
    cart:[],
    error:null
}

export const Cartreducer =(state=initstate,action)=>{

    switch(action.type){

        case ActionTypes.ADD_TO_CART:
            let item=state.cart.some((v)=>v.pid===action.payload.pid)
            
            if(item){
                    let index=state.cart.findIndex((v)=>v.pid===action.payload.pid)
                    state.cart[index].qty++;
            }else{
                state.cart.push(action.payload)
            }
            return{
                ...state,
                isloading:false,
                error:null
            }
            default:
                return state
    }
}