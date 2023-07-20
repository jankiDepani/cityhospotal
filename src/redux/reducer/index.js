import { combineReducers } from "redux";
import { coutenRducer } from "./Conter.reducer";
import { DoctrorRducer } from "./Doctor.reducer";

export const rootReducer = combineReducers({
    counter: coutenRducer,
    doctors: DoctrorRducer
})