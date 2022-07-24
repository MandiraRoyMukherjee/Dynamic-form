import changeTheNumber from "./updown";
import changeTheNumber2 from "./muldi";

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
    //   myNumber:changeTheNumber
        changeTheNumber,changeTheNumber2
    }
);

export default reducers