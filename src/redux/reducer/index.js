import { combineReducers } from "redux";
import { DoctrorRducer } from "./Doctor.reducer";
import { MadicineReducer } from "./Madicine.reducer";
import { Cartreducer } from "./Cart.reducer";
import CounterReducer from "../slice/CounterSlice";

export const rootReducer = combineReducers({
    counter: CounterReducer,
    doctors: DoctrorRducer,
    madicines: MadicineReducer,
    addtocart: Cartreducer
})