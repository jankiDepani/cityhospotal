import { combineReducers } from "redux";
import { coutenRducer } from "./Conter.reducer";
import { DoctrorRducer } from "./Doctor.reducer";
import { MadicineReducer } from "./Madicine.reducer";
import { CartReducer } from "./Cart.reducer";

export const rootReducer = combineReducers({
    counter: coutenRducer,
    doctors: DoctrorRducer,
    madicines: MadicineReducer,
    addtocart: CartReducer
})