import { combineReducers } from "redux";
// import { DoctrorRducer } from "./Doctor.reducer";
import { MadicineReducer } from "./Madicine.reducer";
// import { Cartreducer } from "./Cart.reducer";
import CounterReducer from "../slice/CounterSlice";
import CartReducer from  "../slice/CartSlice"
import doctorsReducer from "../slice/doctorsSlice";

export const rootReducer = combineReducers({
    counter: CounterReducer,
    doctors: doctorsReducer,
    madicines: MadicineReducer,
    addtocart: CartReducer
})